const { NotFound } = require("http-errors");

const { sendSuccessResp } = require("../helpers");
const contactsOperations = require("../model/contacts");

const getContacts = async (req, res) => {
  const result = await contactsOperations.getContacts();
  sendSuccessResp(res, { result });
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact with the id-${contactId} was not found`);
  }
  sendSuccessResp(res, { result });
};

const addContact = async (req, res) => {
  const result = await contactsOperations.addContact(req.body);
  sendSuccessResp(res, { result }, 201);
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContactById(
    contactId,
    req.body
  );
  if (!result) {
    throw new NotFound(`Contact with the id-${contactId} was not found`);
  }
  sendSuccessResp(res, { result });
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
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
  removeContact,
};
