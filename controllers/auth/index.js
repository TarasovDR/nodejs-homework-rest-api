const signup = require("./signup");
const verify = require("./verify");
const resend = require("./resend");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const avatar = require("./avatar");

module.exports = {
  signup,
  verify,
  resend,
  login,
  logout,
  getCurrentUser,
  avatar,
};
