const express = require("express");
const router = express.Router();

const {
  joiSchema,
  updateFavoriteJoiSchema,
  contactUpdateSchema,
} = require("../../models/contact");
const {
  authenticate,
  controllerWrapper,
  validation,
} = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, controllerWrapper(ctrl.getContacts));

router.get("/:contactId", authenticate, controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validation(joiSchema),
  controllerWrapper(ctrl.addContact)
);

router.put(
  "/:contactId",
  authenticate,
  validation(contactUpdateSchema),
  controllerWrapper(ctrl.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(updateFavoriteJoiSchema),
  controllerWrapper(ctrl.updateFavorite)
);

router.delete(
  "/:contactId",
  authenticate,
  controllerWrapper(ctrl.removeContact)
);

module.exports = router;
