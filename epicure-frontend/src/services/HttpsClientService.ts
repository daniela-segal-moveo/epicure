import axios from "axios";

const BASE_URL = "/api";

class HttpClient {
  static async getAll(resource: string) {
    const response = await axios.get(`${BASE_URL}/${resource}`);
    return response.data;
  }

  static async get(resource: string, id: string) {
    const response = await axios.get(`${BASE_URL}/${resource}/${id}`);
    return response.data;
  }

  static async add(resource: string, item: any) {
    const response = await axios.post(`${BASE_URL}/${resource}`, item);
    return response.data;
  }
  static async update(resource: string, id: string, item: any) {
    const response = await axios.put(`${BASE_URL}/${resource}/${id}`, item);
    return response.data;
  }

  static async delete(resource: string, id: string) {
    const response = await axios.delete(`${BASE_URL}/${resource}/${id}`);
    return response.data;
  }
}

export default HttpClient;
