const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('your_stripe_secret_key');

admin.initializeApp();

exports.makePayment = functions.https.onRequest(async (req, res) => {
  try {
    const { token, amount, currency, userId } = req.body;

    // Create a charge on Stripe using the token
    const charge = await stripe.charges.create({
      amount,  // Amount in cents
      currency,
      source: token.id,  // Token from the client
      description: 'Example charge',
    });

    if (charge.status === 'succeeded') {
      // Payment was successful
      // Update user's payment status in your Firebase Realtime Database or Firestore

      const db = admin.firestore();
      const userRef = db.collection('users').doc(userId);
      await userRef.update({ paymentStatus: 'paid' });

      res.json({ success: true, message: 'Payment successful' });
    } else {
      // Payment failed
      res.json({ success: false, message: 'Payment failed' });
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    res.json({ success: false, error: error.message });
  }
});
