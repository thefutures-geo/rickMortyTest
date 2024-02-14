import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    querySearchCharacterName: "",
    querySearchCharacterGender: "All",
    loading: true,
    rickAndMortyCharacters: [],
    selectedCharacter: {},
  }),
});
