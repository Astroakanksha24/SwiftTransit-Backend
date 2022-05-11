const functions = require("firebase-functions");
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("./config/database").connect();

// const selfLearning = require("./routes/selfLearning");

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.json({message:'Welcome to Swift Transit!'})
})

// app.use("/user-lead", user_lead);




// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server Listening on ${port}`);
// });

exports.api = functions
    .region('asia-south1')
    .https.onRequest(app)