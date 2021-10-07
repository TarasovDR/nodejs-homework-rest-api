const { NotFound } = require("http-errors");

const { sendSuccessResp } = require("../../helpers");
const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound(`Contact with the id-${contactId} was not found`);
  }
  sendSuccessResp(res, { message: "Success delete" });
};

module.exports = removeContact;
