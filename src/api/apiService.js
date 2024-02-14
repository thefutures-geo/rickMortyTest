import { api } from "boot/axios";

const getCharacterInfo = (key, query) => {
  return api.get(`/character${query ? `?${key}=${query}` : ""}`);
};

// Export the created Pinia instance
export { getCharacterInfo };
