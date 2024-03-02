// // PaymentForm.js
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const PaymentForm = () => {
//   const [amount, setAmount] = useState(0);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error);
//       return;
//     }

//     const response = await fetch('/api/charge', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: amount * 100, token: paymentMethod }),
//     });

//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default PaymentForm;
