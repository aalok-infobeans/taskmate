const User = require("../../../models/user.model");
const asyncHandler = require("../../../middleware/asynchandler.middleware");
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.success(200, { user: user.toJSON() });
  } else {
    return res.serverError(
      404,
      ErrorHandler(constants.error.auth.userNotfound)
    );
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.status = req.body.status || user.status;
    user.role = req.body.role || user.role;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.success(200, { user: updatedUser });
  } else {
    return res.serverError(
      404,
      ErrorHandler(constants.error.auth.userNotfound)
    );
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

module.exports = {
  getUserProfile,
  updateUserProfile,
  getUsers,
};
