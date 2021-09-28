const express = require("express");
const router = express.Router();

const { joiSchema, updateFavoriteJoiSchema } = require("../../models/contact");
const { controllerWrapper, validation } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");

router.get("/", controllerWrapper(ctrl.getContacts));

router.get("/:contactId", controllerWrapper(ctrl.getContactById));

router.post("/", validation(joiSchema), controllerWrapper(ctrl.addContact));

router.put(
  "/:contactId",
  validation(joiSchema),
  controllerWrapper(ctrl.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  validation(updateFavoriteJoiSchema),
  controllerWrapper(ctrl.updateFavorite)
);

router.delete("/:contactId", controllerWrapper(ctrl.removeContact));

module.exports = router;
