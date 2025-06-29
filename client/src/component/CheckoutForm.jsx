import { useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm({ campaignId, amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");

    if (!stripe || !elements) {
      setStatus("Stripe is not ready yet.");
      return;
    }

    try {
      console.log("⏳ Creating PaymentIntent...");
      const res = await fetch("http://localhost:5000/api/payment/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      console.log("✅ PaymentIntent created:", data);

      console.log("⏳ Confirming payment...");
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log("✅ Payment confirmation result:", result);

      if (result.error) {
        setStatus("❌ Payment failed: " + result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        setStatus("✅ Payment successful!");
        console.log("✅ Payment succeeded. Updating campaign...");

        const token = localStorage.getItem("token");
        if (!token) {
          setStatus("You must be logged in to donate.");
          return;
        }

        const donateRes = await axios.post(
          `http://localhost:5000/api/campaigns/${campaignId}/donate`,
          { amount },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("✅ Campaign updated:", donateRes.data);

        setTimeout(() => {
          window.location.href = `/campaign/${campaignId}`;
        }, 2000); // Optional delay to show success
      }
    } catch (error) {
      console.error("🔥 Caught error:", error);
      setStatus("An error occurred. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <label>Amount: ₹{amount}</label>

      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: {
              color: "#fa755a",
            },
          },
          hidePostalCode: true,
        }}
      />

      <button
        type="submit"
        disabled={!stripe}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Pay Now
      </button>

      {status && (
        <div
          className={`text-sm p-2 rounded ${
            status.includes("✅")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </div>
      )}
    </form>
  );
}
