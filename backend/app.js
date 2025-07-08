const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const connectDB = require("./config/db.config");
const responseMiddleWare = require("./middleware/response.middleware");
const { notFound, errorHandler } = require("./middleware/error.middleware");

const app = express();
app.use(cookieParser());

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseMiddleWare);

// Router ..
const appRouter = require("./routes/v1");

app.use("/v1/users", appRouter.userRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
