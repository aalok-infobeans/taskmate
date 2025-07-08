const bcrypt = require("bcryptjs");
const { bcryptConfig } = require("../config");
const users = [
  {
    name: "Aalok Shirvastava",
    email: "aalok.shrivastava@infobeans.com",
    password: bcrypt.hashSync("123456", bcryptConfig.hashRound),
    status: "active",
    role: "admin",
  },
  {
    name: "Gaura Shirvastava",
    email: "gaura@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    status: "active",
    role: "user",
  },
  {
    name: "Amit Gupta",
    email: "amit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    status: "active",
    role: "user",
  },
];
module.exports = users;
