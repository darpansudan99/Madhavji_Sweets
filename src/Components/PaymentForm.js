import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);


  // In your React component
    const handlePayment = async () => {
        // Collect customer data, including card information
        const cardElement = elements.getElement(CardElement);
    
        const { token, error } = await stripe.createToken(cardElement);
    
        if (error) {
        // Handle error
        console.error(error.message);
        } else {
        // Send the token to your server (Firebase Function)
        try {
            const response = await fetch('your_firebase_function_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                amount: 1000, // Amount in cents
                currency: 'usd',
            }),
            });
    
            const data = await response.json();
    
            if (data.success) {
            // Payment successful, update order status
            // Notify the user
            console.log(data.message);
            } else {
            // Payment failed, handle the error
            console.error(data.error);
            }
        } catch (error) {
            // Handle network or server errors
            console.error(error);
        }
        }
    };
    // return <button onClick={handlePayment}>Buy now</button>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Create a PaymentMethod with card information
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      // PaymentMethod created successfully
      // Send the PaymentMethod ID to your server for further processing
      // Handle form submission to your server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="card-element">
          Credit or debit card
        </label>
        <CardElement
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div id="card-errors" role="alert">{error}</div>
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
