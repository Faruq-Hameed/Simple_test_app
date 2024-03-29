const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const ProductRoutes = require("./routes/product.route");

const app = express();


/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());
//logger
app.use(morgan('dev'))
//securing http headers
app.use(helmet())

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

/* Telling the server to use the routes in the ProductRoutes file. */
app.use("/api", ProductRoutes);

//handling invalid routes requests
app.use('*', (req, res)=>{
  res.status(400).send({ message: "Invalid url" });
})

module.exports = app;
