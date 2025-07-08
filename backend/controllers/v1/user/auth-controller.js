const { constants } = require("../../../config");
const asyncHandler = require("../../../middleware/asynchandler.middleware");
const User = require("../../../models/user.model");
const { ErrorHandler } = require("../../../util/custom.error");
const { generateToken } = require("../../../util/jwt.util");

// @desc    Auth user & get token
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, status: "active" });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.success(200, { user: user.toJSON() });
  } else {
    return res.serverError(
      401,
      ErrorHandler(constants.error.auth.inValidLogin)
    );
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, status } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.serverError(401, ErrorHandler(constants.error.auth.emailTaken));
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
    status,
  });

  if (user) {
    generateToken(res, user._id);
    res.success(201, { user: user.toJSON() });
  } else {
    return res.serverError(404, ErrorHandler(constants.error.auth.inValidUser));
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.clearCookie("jwt");
  res.success(200, { message: constants.error.auth.LogoutMessage });
};

module.exports = { registerUser, authUser, logoutUser };
