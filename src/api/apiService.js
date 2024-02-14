import { api } from "boot/axios";

const getCharacterInfo = (storedQuerys) => {
  const nameQuery = storedQuerys.querySearchCharacterName
    ? `name=${storedQuerys.querySearchCharacterName}`
    : "";
  const genderQuery =
    storedQuerys.querySearchCharacterGender &&
    storedQuerys.querySearchCharacterGender !== "All"
      ? `gender=${storedQuerys.querySearchCharacterGender}`
      : "";

  const queryParams = `${nameQuery}${
    nameQuery && genderQuery ? "&" : ""
  }${genderQuery}`;

  return api.get(`/character${queryParams && `?${queryParams}`}`);
};

// Export the created Pinia instance
export { getCharacterInfo };
