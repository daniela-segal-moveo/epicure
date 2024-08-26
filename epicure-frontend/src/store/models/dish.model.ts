export interface Dish {
  id: string;
  name: string;
  ingredients: string[];
  description: string;
  imageUrl: string;
  price: number;
  isSignature: boolean;
  restaurantId: string;
  createdAt: Date;
}
