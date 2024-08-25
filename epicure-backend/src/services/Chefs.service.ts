import Chef, { IChef } from "../models/Chef.model";
import Restaurant from "../models/Restaurant.model";

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

  async getChefById(chefId: string) {
    chefId = chefId.trim();

    try {
      const chef = await Chef.findById(chefId);
      if (!chef) {
        throw new Error("Could not find dish");
      }
      return chef;
    } catch (error) {
      console.error("Error finding chef:", error);
      throw new Error("Could not find chef");
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

  async updateChef(chefId: string, updateData: IChef) {
    chefId = chefId.trim();

    try {
      if (updateData.restaurants && updateData.restaurants.length > 0) {
        await Promise.all(
          updateData.restaurants.map(async (restaurantId) => {
            const restaurant = await Restaurant.findById(restaurantId);
            if (!restaurant)
              throw new Error("one or more restaurants does not exist in DB");
          })
        );
      }
      console.log(chefId)

      const updatedChef = await Chef.findByIdAndUpdate(
        chefId,
        { $set: updateData },
        { new: true, runValidators: true }
      );

      return updatedChef;
    } catch (error) {
      console.error("Error updating chef:", error);
      throw new Error("Could not update chef");
    }
  },

  async deleteChef(chefId: string) {
    chefId = chefId.trim();

    try {
      const deletedChef = await Chef.findByIdAndDelete(chefId);

      if (!deletedChef) {
        throw new Error("Chef not found");
      }

      await Restaurant.updateMany(
        { chef: chefId }, 
        { $unset: { chef: "" } } 
      );

      return deletedChef;
    } catch (error) {
      console.error("Error deleting chef:", error);
      throw new Error("Could not delete chef");
    }
  },
};
