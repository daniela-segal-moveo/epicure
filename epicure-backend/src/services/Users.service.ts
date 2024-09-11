import User, { IUser } from "../models/User.model";

import jwt from "jsonwebtoken";

const SECRET_KEY = "cat"; // Simple secret key for development

const generateToken = (payload: any) => {
  const options = {
    expiresIn: "1h", // Token expiration time
  };

  const token = jwt.sign(payload, SECRET_KEY, options);
  return token;
};

export default {
  async createUser(userData: IUser) {
    try {
      const newUser = new User(userData);
      await newUser.save();
      return newUser;
    } catch (error) {
      console.error("Error inserting user:", error);
      throw new Error("Could not insert user");
    }
  },

  async loginUser(email: string, password: string) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid username or password");
      }

      if (user.password !== password) {
        throw new Error("Invalid username or password");
      }

      const token = generateToken({ id: user._id, role: user.role });
      return { token, user};
    } catch (error) {
      console.error("Error logging in user:", error);
      throw new Error("Could not login user");
    }
  },
};
