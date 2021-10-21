const { BadRequest, NotFound } = require("http-errors");

const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const resend = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!email) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "missing required field email",
    });
  }
  if (!user) {
    throw new NotFound(`User with email ${email} not found`);
  }
  if (!user.verify && !user.verifyToken) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Verification has already been passed",
    });
  }

  const verifyEmailServer = "http://localhost:3000";

  const verifyEmail = {
    to: email,
    subject: "Please, verify your email",
    html: `
    <p><strong>Email клиента:</strong> ${email}</p>
    <p><strong>Телефон клиента:</strong> 8-066 555-55-55</p>
    <a 
      href=${verifyEmailServer}/api/auth/verify/${user.verifyToken} target="_blank">
      Confirm email
    </a>`,
  };

  await sendEmail(verifyEmail);
  res.status(201).json({
    status: "Success",
    code: 201,
    message: "Success registration!",
  });
};

module.exports = resend;
