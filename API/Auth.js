import axios from "axios";
import { BASE_URL } from "../constants";
import { Storage, handleError } from "../utils";

class AuthAPI {
  constructor() {
    this.api = axios.create({
      baseURL: `${BASE_URL}/users`,
    });
  }

  async register(data) {
    try {
      const response = await this.api.post("/auth/register", data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }

  async login(credentials) {
    try {
      const { data } = await this.api.post("/auth/login", credentials);
      await Storage.setCredentials(data.data);
    } catch (error) {
      throw handleError(error);
    }
  }
}

export default new AuthAPI();
