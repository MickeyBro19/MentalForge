const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.startsWith("Bearer")) {
    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "User not authorized" });
    }
  }
  if(!token){
    res.status(401).json({ message: "User not authorized, token not provided" });
  }


});

module.exports = {protect};