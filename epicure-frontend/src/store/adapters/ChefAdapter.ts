import axios from "axios";
import { Chef } from "../models/chef.model";

class ChefsAdapter {
  static readonly endpoint = {
    getChefs: "/api/chefs/",
    getChefById: "/api/chefs/getChef",
    updateChef: "/api/chefs/updateChef",
    deleteChef: "/api/chefs/deleteChef",
    addChef: "/api/chefs/addChef",
  };

  static async getAllChefs(): Promise<Chef[]> {
    const res = await axios.get(`${ChefsAdapter.endpoint.getChefs}`);
    return res.data as Chef[];
  }

  static async getChef(id: string): Promise<Chef> {
    const res = await axios.get(`${ChefsAdapter.endpoint.getChefById}/${id}`);
    return res.data as Chef;
  }

  static async addChef(newChef: Chef): Promise<Chef> {
    const res = await axios.post(`${ChefsAdapter.endpoint.addChef}`, newChef);
    return res.data as Chef;
  }

  static async updateChef(updatedChef: Chef): Promise<Chef> {
    const res = await axios.put(
      `${ChefsAdapter.endpoint.updateChef}`,
      updatedChef
    );
    return res.data as Chef;
  }

  static async deleteChef(id: string): Promise<void> {
    await axios.delete(`${ChefsAdapter.endpoint.deleteChef}/${id}`);
  }
}

export default ChefsAdapter;
