import mongoose, { Schema, Document } from "mongoose";

export interface IChef {
  name: string;
  bio: string;
  imageUrl: string;
  restaurants: Schema.Types.ObjectId[];
  createdAt: Date;
}

const ChefSchema: Schema = new Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  imageUrl: { type: String, required: true },
  restaurants: { type: [Schema.Types.ObjectId], required: true },
  createdAt: { type: Date, default: Date.now },
});
const Chef = mongoose.model<IChef>("Chef", ChefSchema);

export default Chef;
