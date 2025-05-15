const jwt = require("jsonwebtoken");

// Middleware to verify token and attach user to req
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded contains id and role
    next();
  } catch {
    res.status(400).json({ error: "Invalid token" });
  }
};

// Middleware to check if the user is an admin
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: "Admin access required" });
  }
};

// Export both
module.exports = {
  authMiddleware,
  adminMiddleware,
};
