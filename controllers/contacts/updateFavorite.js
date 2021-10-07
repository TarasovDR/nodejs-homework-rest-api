const { NotFound } = require("http-errors");

const { sendSuccessResp } = require("../../helpers");
const { Contact } = require("../../models");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw new NotFound(404, "Not found");
  }
  sendSuccessResp(res, { result });
};

module.exports = updateFavorite;
