import mongoose, { Schema, Document } from "mongoose";

export interface IHero {
  ImgUrl: string;
  header: string;
  searchBarText: string;
}

const HeroSchema: Schema = new Schema({
  ImgUrl: { type: String, required: true },
  header: { type: String, required: true },
  searchBarText: { type: String, required: true },
});
const Hero = mongoose.model<IHero>("Hero", HeroSchema);

export default Hero;
