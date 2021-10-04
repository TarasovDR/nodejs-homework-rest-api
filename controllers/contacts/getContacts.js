const { sendSuccessResp } = require("../../helpers");
const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const result = await Contact.find({});
  sendSuccessResp(res, { result });
};

module.exports = getContacts;
