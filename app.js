const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const createError = require("http-errors");
const cors = require('cors');
const path = require('path');

app.use(cors());
require("dotenv").config();
// const initializePassport= require('./config/passportConfig');
// initializePassport(passport);
const port = process.env.PORT || 3000;
const route = require("./api/routes");
const { sequelize } = require("./models");
sequelize.sync();

var corsOptions = {
  origin: "http://localhost:3001",
};

global.__basedir = __dirname;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// parse request data  content type
// Enable CORS from client-side
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(morgan("combined"));
// app.use(fileUpload());

new Promise((resolve, reject) => {
  reject('error');
}).catch((error) => {});

// Route init
route(app);
app.get("/", async (req, res, next) => {
  res.send("Welcome to Eplaza!");
});

app.use(express.static(path.join(__dirname, '/')));
// app.use(async(req,res,next)=>{
//   // const error= new Error("Not Found")
//   // error.status=404;
//   // next(error)
//   next(createError.NotFound());
// })
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
