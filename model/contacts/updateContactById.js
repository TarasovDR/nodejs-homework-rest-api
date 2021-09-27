const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");

const updateContactById = async (id, data) => {
  const contacts = await getContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const updateContact = { ...contacts[idx], ...data };
  contacts[idx] = updateContact;
  await updateContacts(contacts);
  return updateContact;
};

module.exports = updateContactById;
