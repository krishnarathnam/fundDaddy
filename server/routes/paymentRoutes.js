const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    console.log("🔥 Create PaymentIntent request received:", amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // ₹500 = 50000 paise
      currency: "inr",
      payment_method_types: ["card"],
    });

    console.log("✅ PaymentIntent created");
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("❌ Stripe error:", error.message);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
