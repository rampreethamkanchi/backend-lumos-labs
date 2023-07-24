const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb+srv://rampreethamkanchi:ramu%402004@cluster0.4thqhzr.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser : true});
const express = require("express");
const router = require("./routes/quotes")
const app = express();
app.use(express.json());
app.use(cors());
app.use('/quote',router);
app.listen("5000", () => {
    console.log("server started listening on local host 5000");
});
