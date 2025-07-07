const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router ..
const appRouter = require("./routes/v1");

app.use("/v1/users", appRouter.userRouter);
module.exports = app;
