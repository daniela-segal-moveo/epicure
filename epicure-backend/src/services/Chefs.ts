import { IChef } from "../modals/Chef";
import Chef from "../modals/Chef";

interface IChefS {
  name: string;
  bio: string;
  imageUrl: string;
  createdAt: Date;
}

export default {
  async getAll() {
    try {
      const chefs = await Chef.find();
      return chefs;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Could not fetch chefs");
    }
  },

  async insertChefToDB(chefData: IChef) {
    try {
      const newChef = new Chef(chefData);
      await newChef.save();
      return newChef;
    } catch (error) {
      console.error("Error inserting chef:", error);
      throw new Error("Could not insert chef");
    }
  },
};
