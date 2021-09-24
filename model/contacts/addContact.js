const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const getContacts = require("./getContacts");
const contactsPath = path.join(__dirname, "db/contacts.json");

const addContact = async (data) => {
  const contacts = await getContacts();
  const newContact = {
    id: v4(),
    ...data,
  };
  contacts.push(newContact);

  fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

module.exports = addContact;

// const addContact = async (name, email, phone) => {
//   await fs.readFile(contactsPath, "utf-8", (error, data) => {
//     if (error) {
//       throw new Error("Cannot read file");
//     }
//     const contacts = JSON.parse(data);

//     const newContact = { id: v4(), name, email, phone };
//     contacts.push(newContact);

//     fs.writeFile(contactsPath, JSON.stringify(contacts), (error) => {
//       if (error) {
//         throw new Error("Cannot read file");
//       }
//     });
//   });
// };
