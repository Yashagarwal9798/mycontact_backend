const express = require("express");
const errorHandler = require("./middleware/filehandler");
const dotenv = require("dotenv").config(); 
const connectdb = require("./config/dbConnect")
connectdb()

const app = express();
const port = process.env.port || 5000;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactroutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})