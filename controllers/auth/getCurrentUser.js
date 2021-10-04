const { sendSuccessResp } = require("../../helpers");
const { Contact } = require("../../models");

const getCurrentUser = async (req, res) => {
  const { _id, email, subscription } = req.user;
  const allContacts = Contact.find({ owner: _id });
  sendSuccessResp(res, { user: _id, email, subscription }, allContacts, 200);
};

module.exports = getCurrentUser;
