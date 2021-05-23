
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

export const register = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

});
