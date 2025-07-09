const express = require("express");
const router = express.Router();
const { authController, userController } = require("../../controllers/v1/user");
const protect = require("../../middleware/auth.middleware");
const userRoleMiddleWare = require("../../middleware/user.role.middleware");
const { constants } = require("../../config");

router.post("/auth", authController.authUser);
router
  .route("/")
  .post(authController.registerUser)
  .get(
    protect,
    userRoleMiddleWare.canAccess([constants.userRole.admin]),
    userController.getUsers
  );
router
  .route("/profile")
  .get(protect, userController.getUserProfile)
  .put(protect, userController.updateUserProfile);
router.post("/logout", authController.logoutUser);

router
  .route("/:id")
  .delete(
    protect,
    userRoleMiddleWare.canAccess([constants.userRole.admin]),
    userController.deleteUser
  )
  .get(
    protect,
    userRoleMiddleWare.canAccess([constants.userRole.admin]),
    userController.getUserById
  )
  .put(
    protect,
    userRoleMiddleWare.canAccess([constants.userRole.admin]),
    userController.updateUser
  );

module.exports = router;
