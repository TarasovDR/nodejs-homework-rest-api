const nodemailer = require("nodemailer");

const { EMAIL_HOST, EMAIL_PASSWORD, EMAIL_SENDER } = process.env;

const nodemailerConfig = {
  host: EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_SENDER,
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_SENDER };
  transporter.sendMail(email);
};

module.exports = sendEmail;
