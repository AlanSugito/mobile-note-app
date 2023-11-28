import axios from "axios";

import { BASE_URL } from "../constants";
import { Storage, handleError } from "../utils";

class NoteAPI {
  constructor() {
    this._api = axios.create({
      baseURL: `${BASE_URL}/notes`,
      timeout: 5000,
    });
  }

  async getNotes() {
    try {
      const { id } = await Storage.getUserCredentials();
      const { data } = await this._api.get(`/${id}`);
      return data.data;
    } catch (error) {
      throw handleError(error);
    }
  }

  async getNoteById(noteId) {
    try {
      const { data } = await this._api.get(`/by/${noteId}`);

      return data.data;
    } catch (error) {
      console.log(error);
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
