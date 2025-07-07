const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Aalok Shirvastava",
    email: "aalok.shrivastava@infobeans.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Gaura Shirvastava",
    email: "gaura@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Amit Gupta",
    email: "amit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
module.exports = users;
