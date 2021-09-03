const express = require("express");
const employeeRouter = require('./routes/employeeRouter')
const productRouter = require("./routes/productRouter")

const app = express();

app.use(express.json())

app.use("/employees", employeeRouter);
app.use("/products", productRouter);


app.listen(3000, () => console.log("Server is listening..."))


