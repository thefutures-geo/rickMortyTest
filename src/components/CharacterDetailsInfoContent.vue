<template>
  <q-dialog data-cy="details-card" ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin home_page">
      <q-parallax :height="220">
        <template v-slot:media>
          <img src="/images/bg_card.png" />
        </template>

        <template v-slot:content="scope">
          <div
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: scope.percentScrolled * 60 + '%',
              left: 0,
              right: 0,
            }"
          ></div>
        </template>
      </q-parallax>

      <div class="column items-center container details_header">
        <div class="avatar-container">
          <img :src="selectedCharacter.image" />
        </div>
        <div class="avatar-container-star">
          <q-btn
            round
            color="darkGrey"
            text-color="darkGrey"
            size="sm"
            icon="star"
          />
        </div>
        <div class="text-subtitle1 text-center q-mt-sm">
          {{ selectedCharacter.status }}
        </div>
        <div class="text-h5 text-center text-weight-medium">
          {{ selectedCharacter.name }}
        </div>
        <div class="text-subtitle1 text-center q-mb-md q-mt-sm">
          {{ selectedCharacter.species }}
        </div>
      </div>

      <div class="body">
        <div class="information_container">
          <div class="text-h5 q-mt-md text-weight-medium text-dark-grey">
            Información
          </div>
          <div class="flex flex-center justify-between q-mt-md">
            <small-grey-info-card
              ><template v-slot:top-content>
                <div class="text-caption text-grey">Gender:</div>
              </template>
              <template v-slot:center-content>
                <div class="text-subtitle1 text-weight-medium truncate-text">
                  {{ selectedCharacter.gender }}
                </div>
              </template></small-grey-info-card
            >

            <small-grey-info-card
              ><template v-slot:top-content>
                <div class="text-caption text-grey">Origin:</div>
              </template>
              <template v-slot:center-content>
                <div class="text-subtitle1 text-weight-medium truncate-text">
                  {{ selectedCharacter.origin.name }}
                </div>
              </template></small-grey-info-card
            >

            <small-grey-info-card
              ><template v-slot:top-content>
                <div class="text-caption text-grey">Type:</div>
              </template>
              <template v-slot:center-content>
                <div class="text-subtitle1 text-weight-medium truncate-text">
                  {{ selectedCharacter.species }}
                </div>
              </template></small-grey-info-card
            >
          </div>
        </div>

        <div class="information_container">
          <div class="text-h5 q-mt-md text-weight-medium text-dark-grey">
            Episodios
          </div>
          <div class="flex flex-center">
            <div class="row container">
              <div
                v-for="episode in 8"
                :key="episode"
                class="col-xs-12 col-sm-6 col-md-3 column_card q-mt-md"
              >
                <small-grey-info-card
                  ><template v-slot:top-content>
                    <div class="text-caption text-grey">Pilot</div>
                  </template>
                  <template v-slot:center-content>
                    <div
                      class="text-subtitle1 text-weight-medium truncate-text"
                    >
                      S01E01
                    </div>
                  </template>
                  <template v-slot:bottom-content>
                    <div class="text-caption text-grey truncate-text">
                      DECEMBER 2, 2013
                    </div>
                  </template></small-grey-info-card
                >
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="rickAndMortyCharacters.length > 0"
          class="information_container"
        >
          <div class="text-h5 q-mt-md text-weight-medium text-dark-grey">
            Personajes interesantes
          </div>

          <div class="flex flex-center card_section">
            <div class="row container">
              <div
                v-for="character in rickAndMortyCharacters.slice(0, 2)"
                :key="character.id"
                class="col-xs-12 col-sm-12 col-md-6 column_card"
              >
                <small-home-card
                  :character="character"
                  @isSelected="onIsSelected"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useDashboardStore } from "stores/dashboard";
import { storeToRefs } from "pinia";
import SmallGreyInfoCard from "./SmallGreyInfoCard.vue";
import SmallHomeCard from "./SmallHomeCard.vue";

export default defineComponent({
  name: "CharacterDetailsInfoContent",
  emits: ["ok", "hide"],
  components: {
    SmallGreyInfoCard,
    SmallHomeCard,
  },
  setup(props, ctx) {
    const store = useDashboardStore();
    const { selectedCharacter, rickAndMortyCharacters } = storeToRefs(store);

    const onDialogHide = () => {
      ctx.emit("hide");
    };

    const updateSelectedCharacter = (character) => {
      selectedCharacter.value = character;
    };

    const onIsSelected = (character) => {
      updateSelectedCharacter(character);
    };

    return {
      selectedCharacter,
      rickAndMortyCharacters,
      onDialogHide,
      onIsSelected,
    };
  },
});
</script>
