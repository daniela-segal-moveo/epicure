import { Request, Response } from "express";
import UserService from "../services/Users.service";

export const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const user = await UserService.createUser(userData);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const data = await UserService.loginUser(email, password);
    if (!data) {
      return res.status(401).send("Invalid username or password.");
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("user doesnt exist");
  }
};
