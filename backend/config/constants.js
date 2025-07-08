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
      inValidLogin: "Invalid email or password",
      accessDenied: "Access Denied",
      unauthorized: "Unauthorized access",
      inValidUser: "Invalid user data",
      LogoutMessage: "Logged out successfully",
      userNotfound: "User not found",
    },
    bodyEmpty: "Request body is empty",
  },
});
module.exports = constants;
