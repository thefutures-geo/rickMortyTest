import SmallHomeCard from "../SmallHomeCard.vue";
import { createPinia, setActivePinia } from "pinia";
import useStore from "../../stores/index.js";

setActivePinia(createPinia());

const store = useStore();

Cypress.Commands.add("getStore", () => store);

const testingCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

describe("SmallHomeCard", () => {
  beforeEach(() => {
    cy.getStore().as("store");
    cy.mount(SmallHomeCard, {
      props: {
        character: testingCharacter,
      },
    });
  });

  it("Click the card and show dialog", () => {
    cy.dataCy("small-card").click();
    cy.dataCy("details-card").should("be.visible");
  });

  it("Dialog shows character details", () => {
    /* cy.dataCy("small-card-name").should("contain", testingCharacter.name);
    cy.dataCy("small-card-status").should(
      "contain",
      `${testingCharacter.status} - ${testingCharacter.species}`
    );
    cy.dataCy("small-card-location").should(
      "contain",
      testingCharacter.location.name
    ); */
  });

  it("Updates selectedCharacter in store on click", () => {
    console.log("que", store.getActivePinia);
  });
});
