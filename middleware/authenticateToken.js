const jwtUtils = require("../utils/jwtUtils");

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  try {
    const decoded = jwtUtils.verifyToken(token);
    req.user = decoded; // Set user information extracted from the token in the request object
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateToken;
