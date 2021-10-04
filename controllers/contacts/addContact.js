const { sendSuccessResp } = require("../../helpers");
const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const result = await Contact.create({ ...req.body, owner: req.user._id });
  sendSuccessResp(res, { result }, 201);
};

module.exports = addContact;
