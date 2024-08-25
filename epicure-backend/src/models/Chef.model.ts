import mongoose, { Schema, Document } from "mongoose";

export interface IChef extends Document {
  name: string;
  bio: string;
  imageUrl: string;
  restaurants: Schema.Types.ObjectId[];
  createdAt: Date;
}

export const ChefSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  imageUrl: { type: String, required: true },
  restaurants: { type: [Schema.Types.ObjectId] , ref: "Restaurant"},
  createdAt: { type: Date, default: Date.now },
});

const Chef = mongoose.model<IChef>("Chef", ChefSchema);

export default Chef;
