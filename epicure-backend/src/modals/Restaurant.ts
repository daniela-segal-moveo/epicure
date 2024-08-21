import mongoose, {Schema, Document} from "mongoose"

export interface IRestaurant{
  name: string,
  location: string;
  chef: Schema.Types.ObjectId;
  dishes: Schema.Types.ObjectId[]
  isPopular: true,
  stars: number
  imageUrl: string;
  createdAt: Date;
  }

const RestaurantSchema : Schema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    chef: {type:Schema.Types.ObjectId, required:true},
    dishes: {type:[Schema.Types.ObjectId], required:true},
    isPopular: {type: Boolean, required: true},
    stars:{type: Number, required: true},
    imageUrl: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
})
const Restaurant = mongoose.model<IRestaurant>('Chef', RestaurantSchema);

export default Restaurant;