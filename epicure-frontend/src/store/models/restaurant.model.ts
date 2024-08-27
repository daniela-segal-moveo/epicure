export interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  chef?: string;
  dishes: string[];
  isPopular: true;
  stars: number;
  createdAt: Date;
}
