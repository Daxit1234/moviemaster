// Card.js
import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const Card = () => {
    const stripe = useStripe();
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvc, setCvc] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe) {
            return;
        }

        // Create a payment method using the card details
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: {
                number: cardNumber,
                exp_month: expDate.split('/')[0],
                exp_year: expDate.split('/')[1],
                cvc: cvc
            },
        });

        if (error) {
            console.log(error.message);
        } else {
            // Send payment method ID and amount to your server
            fetch('http://localhost:8080/payment/process-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethodId: paymentMethod.id,
                    amount: amount,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle success or failure from server
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
            />
            <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
            />
            <input
                type="text"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
                placeholder="MM/YY"
            />
            <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
            />
            <button type="submit">Pay</button>
        </form>
    );
};

export default Card;
