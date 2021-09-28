const { NotFound } = require("http-errors");

const { sendSuccessResp } = require("../helpers");
const { Contact } = require("../models");

const getContacts = async (req, res) => {
  const result = await Contact.find({}, "_id name email phone favorite");
  sendSuccessResp(res, { result });
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(
    contactId,
    "_id name email phone favorite"
  );
  if (!result) {
    throw new NotFound(`Contact with the id-${contactId} was not found`);
  }
  sendSuccessResp(res, { result });
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  sendSuccessResp(res, { result }, 201);
};

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

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound(`Contact with the id-${contactId} was not found`);
  }
  sendSuccessResp(res, { message: "Success delete" });
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContactById,
  updateFavorite,
  removeContact,
};
