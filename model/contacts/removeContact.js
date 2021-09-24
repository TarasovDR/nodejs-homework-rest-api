const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
  const contacts = await getContacts();
  const idx = contacts.findIndex((item) => item.id.toString() === id);
  if (idx === -1) {
    return null;
  }
  contacts.splice(idx, 1);
  await updateContacts(contacts);
  return "Success remove";
};

module.exports = removeContact;
