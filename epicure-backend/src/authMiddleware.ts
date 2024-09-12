import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "cat";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.substring(7) : null;

  if (token == null) {
    return res.sendStatus(401); 
  }

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.sendStatus(401); 
    }
    next();
  });
};

export default authenticateToken;
