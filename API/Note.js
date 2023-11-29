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

  async getNotes(search="") {
    try {
      const { id } = await Storage.getUserCredentials();
      const { data } = await this._api.get(`/${id}`, {params: {search}});
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
      throw handleError(error);
    }
  }

  async addNote(note) {
    try {
      const { id } = await Storage.getUserCredentials();
      const { data } = await this._api.post(`/${id}`, note);

      return data;
    } catch (error) {
      throw handleError(error);
    }
  }

  async updateNote(id, data) {
    try {
      const response = await this._api.put(`/${id}`, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }

  async deleteNote(id) {
    try {
      const { data } = await this._api.delete(`/${id}`);
      return data;
    } catch (error) {
      throw handleError(error);
    }
  }
}

export default new NoteAPI();
