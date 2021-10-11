const { sendSuccessResp } = require("../../helpers");

const getCurrentUser = async (req, res) => {
  sendSuccessResp(res, { user: email, subscription }, 200);
};

module.exports = getCurrentUser;
