const express = require("express");
const mongoose = require("mongoose");
const connectToMongoDB = require("./connect");
const urlRoute = require("./routes/url");
const cors = require("cors");

const URL = require("./models/url");

const app = express();

app.use(express.json());
app.use(cors());

connectToMongoDB(
  "mongodb+srv://anshulkahar2211:fz6SSPCRQd3FtK4s@cluster0.rvvxbpz.mongodb.net/?retryWrites=true&w=majority"
).then(() => {
  console.log("Connected to MongoDB");
});

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  res.redirect(entry.redirectURL);
});

app.listen(8000, () => {
  console.log("Server started!");
});

// fz6SSPCRQd3FtK4s
// mongodb+srv://anshulkahar2211:fz6SSPCRQd3FtK4s@cluster0.rvvxbpz.mongodb.net/?retryWrites=true&w=majority
