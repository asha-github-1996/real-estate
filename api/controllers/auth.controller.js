import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  //Hashing password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    //saving to database
    await newUser.save();
    res.status(201).json({
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export default signup;
