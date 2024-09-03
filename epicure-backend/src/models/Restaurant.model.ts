import mongoose, { Schema, Document } from "mongoose";

export interface IRestaurant extends Document {
  name: string;
  imageUrl: string;
  chef?: Schema.Types.ObjectId;
  dishes: Schema.Types.ObjectId[];
  isPopular: true;
  stars: number;
  createdAt: Date;
}

const RestaurantSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  chef: { type: Schema.Types.ObjectId, ref: "Chef"},
  dishes: { type: [Schema.Types.ObjectId], ref: "Dish", required: true },
  isPopular: { type: Boolean, required: true },
  stars: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Restaurant = mongoose.model<IRestaurant>("Restaurant", RestaurantSchema);

export default Restaurant;
