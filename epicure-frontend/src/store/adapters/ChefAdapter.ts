import { Chef } from "../models/chef.model";
import HttpClient from "../../services/HttpsClientService";

class ChefsAdapter {
  static readonly endpoint = {
    getChefs: "/api/chefs/",
    getChefById: "/api/chefs/get",
    updateChef: "/api/chefs/update",
    deleteChef: "/api/chefs/delete",
    addChef: "/api/chefs/add",
  };

  static async getAllChefs(): Promise<Chef[]> {
    const res = await HttpClient.getAll(ChefsAdapter.endpoint.getChefs);
    return res.data as Chef[];
  }

  static async getChef(id: string): Promise<Chef> {
    const res = await HttpClient.get(ChefsAdapter.endpoint.getChefById, id);
    return res.data as Chef;
  }

  static async addChef(newChef: Chef): Promise<Chef> {
    const res = await HttpClient.add(ChefsAdapter.endpoint.addChef, newChef);
    return res.data as Chef;
  }

  static async updateChef(updatedChef: Chef): Promise<Chef> {
    const res = await HttpClient.update(
      ChefsAdapter.endpoint.updateChef,
      updatedChef.id,
      updatedChef
    );
    return res.data as Chef;
  }

  static async deleteChef(id: string): Promise<Chef> {
    const res = await HttpClient.delete(ChefsAdapter.endpoint.deleteChef, id);
    return res.data as Chef;
  }
}

export default ChefsAdapter;
