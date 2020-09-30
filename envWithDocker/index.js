
const express = require("express");

const PORT = process.env.PORT || 8090;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen(PORT, () => {
    console.log("Mongo Collection url--->>", process.env.MONGO_CONNECTION_URL);
    console.log(`Running on ${PORT}`);
});