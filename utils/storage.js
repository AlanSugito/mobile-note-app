import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
  async getUserCredentials() {
    try {
      const credentials = await AsyncStorage.getItem("credentials");
      return JSON.parse(credentials);
    } catch (error) {
      return null;
    }
  }

  async setCredentials(credentials) {
    try {
      const data = JSON.stringify(credentials);
      await AsyncStorage.setItem("credentials", data);
    } catch (error) {
      throw error;
    }
  }

  async removeCredentials() {
    try {
      await AsyncStorage.removeItem("credentials");
    } catch (error) {
      throw error;
    }
  }
}

export default new Storage();
