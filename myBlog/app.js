require("dotenv").config();
const express = require("express");
const experssLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

connectDb();

app.use(experssLayouts);
app.set("view engine", "ejs");
app.set("vies", "./views");

app.use(express.static("public"));

app.use("/", require("./routes/main"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});