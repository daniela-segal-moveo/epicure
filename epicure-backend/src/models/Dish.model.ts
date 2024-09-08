import mongoose, { Schema, Document } from "mongoose";

export interface IDish extends Document {
  name: string;
  ingredients: string[];
  imageUrl: string;
  price: number;
  isSignature: boolean;
  category: string[];
  restaurantId: Schema.Types.ObjectId;
  createdAt: Date;
}

const DishSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  isSignature: { type: Boolean, required: true },
  category: { type: [String], required: true },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  createdAt: { type: Date, default: Date.now },
});
const Dish = mongoose.model<IDish>("Dish", DishSchema);

export default Dish;
