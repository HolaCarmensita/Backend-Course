require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();

//connectDB
const connectDB = require("./db/connect");

//Authetication
const authenticateUser = require("./middleware/authetication");

//routers
const broadcastRouter = require("./routes/broadcast.js");
const authRouter = require("./routes/auth");
const channelsRouter = require("./routes/channels.js");
const messageRouter = require("./routes/message.js");

//Errorhandler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//Static and json
app.use(express.static("./public")); //gör mappen public till static.
app.use(express.json()); //säger att vi använder json i express,

//urls
app.use("/ducks/api/auth", authRouter);
app.use("/ducks/api/channel", authenticateUser, channelsRouter);
app.use("/ducks/api/broadcast", authenticateUser, broadcastRouter);
app.use("/ducks/api", authenticateUser, messageRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//server
const port = process.env.PORT || 3000; // Port number to listen on

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Det funkar vi lyssnar på ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
