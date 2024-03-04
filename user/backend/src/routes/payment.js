const express = require('express');
const stripe = require('stripe')('sk_test_51OkMarSFAUlrV5RfsFCkJo1uxdZLbU89Dim37lJE7yM13ixoGjJ3ZrZvL0efSQandmHVFVVPNO6SBaJOgoi2tWW700vUIN5mEe');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/process-payment', async (req, res) => {
    const {paymentMethodId,  amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'usd',
            payment_method: paymentMethodId,
            confirm: true,
        });

        res.json({ success: true, paymentIntent });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports=router