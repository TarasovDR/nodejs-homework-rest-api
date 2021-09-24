const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const getContacts = async () => {
  // await fs.readFile(contactsPath, "utf-8", (error, data) => {
  //   if (error) {
  //     throw new Error("Cannot read file");
  //   }
  //   return JSON.parse(data);
  // });

  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

module.exports = getContacts;
