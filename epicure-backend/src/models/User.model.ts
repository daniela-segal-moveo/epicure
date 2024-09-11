import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
  }
  
  const UserSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['USER', 'ADMIN'] }
  });

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
