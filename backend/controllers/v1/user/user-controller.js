const User = require("../../../models/user.model");
const asyncHandler = require("../../../middleware/asynchandler.middleware");
const { constants } = require("../../../config");
const { ErrorHandler } = require("../../../util");
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.success({ user: user.toJSON() });
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

    res.success({ user: updatedUser });
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
  res.success({ users });
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (constants.userRole.admin === user.role) {
      return res.serverError(
        400,
        ErrorHandler(constants.error.user.deleteAdminUser)
      );
    }
    await User.deleteOne({ _id: user._id });
    res.success({ message: constants.error.user.userDeleted });
  } else {
    return res.serverError(
      404,
      ErrorHandler(constants.error.auth.userNotfound)
    );
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.success({ user });
  } else {
    return res.serverError(
      404,
      ErrorHandler(constants.error.auth.userNotfound)
    );
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.status = req.body.status || user.status;
    user.role = req.body.role || user.role;

    const updatedUser = await user.save();

    res.success({ user: updatedUser });
  } else {
    return res.serverError(
      404,
      ErrorHandler(constants.error.auth.userNotfound)
    );
  }
});

module.exports = {
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
