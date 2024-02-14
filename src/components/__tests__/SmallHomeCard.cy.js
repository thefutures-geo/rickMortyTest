import SmallHomeCard from "../SmallHomeCard.vue";

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

  it("Card must be selected without problems", () => {
    cy.dataCy("small-card").click();
  });

  it("Card image must be selected without problems", () => {
    cy.dataCy("small-card-image").click();
  });

  it("Card must show the correct information", () => {
    cy.dataCy("small-card-image").should(
      "have.attr",
      "src",
      testingCharacter.image
    );

    cy.dataCy("small-card-status").should(
      "contain",
      `${testingCharacter.status} - ${testingCharacter.species}`
    );

    cy.dataCy("small-card-name").should("contain", testingCharacter.name);
  });
});
