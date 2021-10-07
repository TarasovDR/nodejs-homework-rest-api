const { NotFound } = require("http-errors");

const { sendSuccessResp } = require("../../helpers");
const { Contact } = require("../../models");

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound(`Contact with the id-${contactId} was not found`);
  }
  sendSuccessResp(res, { result });
};

module.exports = updateContactById;
