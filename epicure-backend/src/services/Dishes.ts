import Dish from "../modals/Dish";
export default {
  async getAll() {
    try {
      const dishes = await Dish.find();
      return dishes;
    } catch {
      console.log("error fetching data");
    }
  },

  async insertDishToDB(dishData: {
    name: string;
    ingredients: string[];
    description: string;
    imageUrl: string;
    price: number;
    isSignature: boolean;
    restaurantId: string; // This should be an ObjectId but use string for now
    createdAt?: Date;
  }) {
    try {
      const newDish = new Dish(dishData);
      await newDish.save(); // Save the new dish to the database
      return newDish;
    } catch (error) {
      console.error("Error inserting dish:", error);
      throw new Error("Could not insert dish");
    }
  },
};
