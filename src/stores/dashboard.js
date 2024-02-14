import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    querySearchCharacter: "",
    loading: true,
    rickAndMortyCharacters: [],
    selectedCharacter: {},
  }),
});
