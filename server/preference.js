import express from 'express';
import vexor from 'vexor';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const { Vexor } = vexor;

const vexorInstance = new Vexor({
    publishedKey: process.env.VEXOR_PUBLISHED_KEY,
    projectId: process.env.VEXOR_PROJECT_ID,
    apiKey: process.env.VEXOR_API_KEY,
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/create_payment", async (req, res) => {
    const datos = req.body.data;
    
    if (!datos || !datos.items.product || !datos.items.quantity) { 
        res.status(400).json({ error: "Faltan datos" });
    }

    try {
        const paymentResponse = await vexorInstance.pay.mercadopago({
            items: [
                {   
                    title: datos.items[0].product.titulo,
                    unit_price: datos.items[0].product.precio,
                    quantity: datos.items[0].quantity,
                }
            ]
        });

        res.status(200).json({ payment_url: paymentResponse.payment_url });
    } catch (error) {
        console.error('Error al procesar el pago', error);
        res.status(500).json({ error: "Hubo un error al procesar el pago" });
    }
});

app.listen(port, () => {
    console.log("Servidor escuchando el puerto 3000")
});