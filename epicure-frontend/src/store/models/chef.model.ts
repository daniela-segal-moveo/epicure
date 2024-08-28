import { Restaurant } from "./restaurant.model";
export interface Chef {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  restaurants: Restaurant[];
  createdAt: string;
}
