import mongoose, {Schema, Document} from "mongoose"

export interface IDish extends Document {
    name: string;
    ingredients: string[];
    description: string;
    imageUrl: string;
    price: number;
    isSignature: boolean;
    restaurantId: Schema.Types.ObjectId; // Reference to Restaurant
    createdAt: Date;
  }

const DishSchema : Schema = new Schema({
    name: {type: String, required: true},
    ingredients: {type: [String], required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    price: {type: Number, required: true},
    isSignature: {type: Boolean, required: true},
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    createdAt: { type: Date, default: Date.now },
})
const Dish = mongoose.model<IDish>('Dish', DishSchema);

export default Dish;