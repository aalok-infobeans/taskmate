"use strict";
const constants = Object.freeze({
  userRole: {
    admin: "admin",
    user: "user",
  },
  error: {
    auth: {
      emailTaken: "Email has already been taken",
      invalidToken: "Invalid Token",
    },
    bodyEmpty: "Request body is empty",
  },
});
module.exports = constants;
