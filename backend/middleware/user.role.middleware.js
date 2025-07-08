const { constants } = require("../config");
const { ErrorHandler } = require("../util");

module.exports.canAccess = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (roles.includes(userRole)) {
      next();
    } else
      res.serverError(
        401,
        ErrorHandler(new Error(constants.error.auth.accessDenied))
      );
  };
};
