const express = require("express");

const { userJoiSchema } = require("../../models/user");
const {
  authenticate,
  controllerWrapper,
  validation,
  upload,
} = require("../../middlewares");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/signup",
  validation(userJoiSchema),
  controllerWrapper(ctrl.signup)
);

router.post("/login", validation(userJoiSchema), controllerWrapper(ctrl.login));

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));

router.get("/current", authenticate, controllerWrapper(ctrl.getCurrentUser));

router.post(
  "/avatars",
  authenticate,
  upload.single("image"),
  controllerWrapper(ctrl.avatar)
);

module.exports = router;
