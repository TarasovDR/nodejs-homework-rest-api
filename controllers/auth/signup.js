const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const { sendEmail } = require("../../helpers");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email ${email} already exist`);
  }

  const avatar = gravatar.url(email, { s: "250" }, true);
  const verifyToken = uuidv4();

  const newUser = new User({
    email,
    verifyToken,
  });
  newUser.setPassword(password);
  newUser.setAvatar(avatar);

  await newUser.save();

  const verifyEmail = {
    to: email,
    subject: "Please, verify your email",
    html: `
    <p><strong>Email клиента:</strong> ${email}</p>
    <p><strong>Телефон клиента:</strong> 8-066 555-55-55</p>
    <a 
      href="http://localhost:3000/api/auth/verify/${verifyToken}" target="_blank">
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

module.exports = signup;
