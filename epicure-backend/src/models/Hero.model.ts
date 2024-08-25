import mongoose, { Schema, Document } from "mongoose";

export interface IHero extends Document {
  ImgUrl: string;
  header: string;
  searchBarText: string;
}

const HeroSchema: Schema = new mongoose.Schema({
  ImgUrl: { type: String, required: true },
  header: { type: String, required: true, default: 'Epicure works with the top chef restaurants in Tel Aviv'},
  searchBarText: { type: String, required: true, default: 'Search for restaurant cuisine, chef'},
});
const Hero = mongoose.model<IHero>("Hero", HeroSchema);

export default Hero;