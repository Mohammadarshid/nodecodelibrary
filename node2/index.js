const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose
  .connect(
    "mongodb+srv://mohammadarshid3:arsh7566@cluster0.v2xk9we.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewurlParser: true,
      useUnfindtopology: true,
    }
  )
  .then((res) => {
    console.log("your database is successfully connected");
  })
  .catch((err) => {
    console.log;
  });
let library = express();
library.use(bodyParser());

const librarySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Course: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const libraryModel = mongoose.model("lib", librarySchema);

library.post("/libpst", async (req, res) => {
  try {
    console.log(req.body);
    let library = libraryModel(req.body);

    await library.save();
    res.json({ mssg: "data receive" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
library.listen(3000, (error) => {
  if (!error) {
    console.log("server is running on 3000");
  } else {
    console.log("error");
  }
});
