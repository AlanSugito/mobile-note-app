import axios from "axios";

import { BASE_URL } from "../constants";
import { Storage } from "../utils";

class NoteAPI {
  constructor() {
    this.api = axios.create({
      baseURL: `${BASE_URL}/api/notes`,
      timeout: 5000,
    });
  }

  async getNotes() {
    try {
      const { id } = await Storage.getUserCredentials();
      const { data } = await this.api.get(`/${id}`);
      return data;
    } catch (error) {
      throw handleError(error);
    }
  }

  async addNote(usernote) {
    try {
      const { data } = this.api.post("/", note);
    } catch (error) {}
  }
}

export default new NoteAPI();
