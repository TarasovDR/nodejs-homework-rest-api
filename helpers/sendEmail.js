const nodemailer = require("nodemailer");

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: "denis_formula1@mail.ru",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "denis_formula1@mail.ru" };
  transporter.sendMail(email);
};

module.exports = sendEmail;
