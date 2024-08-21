import { IHero } from "../modals/Hero";
import Hero from "../modals/Dish";
export default {
  async getHeroData() {
    try {
      const hero = await Hero.find();
      return hero;
    } catch {
      console.log("error fetching data");
    }
  },

  async insertHero(heroData: IHero) {
    try {
      const hero = new Hero(heroData);
      await hero.save();
    } catch (error) {
      console.error("Error inserting hero:", error);
      throw new Error("Could not insert hero");
    }
  },

  async updateHero(updatedData: IHero, id: string) {
    try {
        // Find the hero by ID and update it with the provided data
        const updatedHero = await Hero.findByIdAndUpdate(id, updatedData, { new: true }).exec();
        if (!updatedHero) {
          throw new Error("Hero not found");
        }
      } catch (error) {
        console.error("Error updating hero:", error);
        throw new Error("Could not update hero");
      }
  },
};
