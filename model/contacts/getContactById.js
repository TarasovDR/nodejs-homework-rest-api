const getContacts = require("./getContacts");

const getContactById = async (id) => {
  const contacts = await getContacts();
  const contact = contacts.find((item) => item.id.toString() === id.toString());
  if (!contact) {
    return null;
  }
  return contact;
};

// const getContactById = async (contactId) => {
//   await fs.readFile(contactsPath, "utf-8", (error, data) => {
//     if (error) {
//       throw new Error("Cannot read file");
//     }
//     const contacts = JSON.parse(data);

//     const contact = contacts.find((item) => item.id === contactId);
//     if (!contact) {
//       return null;
//     }
//     console.table(contact);
//   });
// };

module.exports = getContactById;
