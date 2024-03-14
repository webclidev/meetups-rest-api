const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key"; // Replace with your own secret key

const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  generateToken,
  verifyToken,
};
