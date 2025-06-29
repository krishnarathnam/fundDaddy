const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authroute.js");
const campaignRoutes = require("./routes/campaignroute.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);

const adminRoutes = require("./routes/adminroute.js");
app.use("/api/admin", adminRoutes);


const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);




mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
