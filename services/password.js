const bcrypt = require("bcrypt");

const passwordService = {
  hashPassword: function (plainTextPassword) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(plainTextPassword, salt);
    return hash;
  },
  comparePasswords: function (plainTextPassword, hashedPassword) {
    return bcrypt.compareSync(plainTextPassword, hashedPassword);
  },
};
module.exports = passwordService;
