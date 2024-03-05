const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5001;

const cors = require("cors");

const tasksRouter = require("./routes/tasksRoute");

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const nameCollection = process.env.MONGODB_NAMECOLLECTION;
const url = `mongodb+srv://${user}:${password}@diego.wmp7dvz.mongodb.net/${nameCollection}?retryWrites=true&w=majority`;

mongoose.connect(url);

app.use(cors());
app.use(express.json());

app.use("/", tasksRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
