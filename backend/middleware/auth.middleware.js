const jwt = require("jsonwebtoken");
const asyncHandler = require("./asynchandler.middleware");
const User = require("../models/user.model");
const { verifyToken } = require("../util/jwt.util");
const { constants } = require("../config");
const { ErrorHandler } = require("../util");

// User must be authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token;
  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = verifyToken(token);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      return res.serverError(
        401,
        ErrorHandler(constants.error.auth.unauthorized)
      );
    }
  } else {
    return res.serverError(
      401,
      ErrorHandler(constants.error.auth.unauthorized)
    );
  }
});

module.exports = protect;
