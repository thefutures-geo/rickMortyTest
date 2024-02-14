<template>
  <q-page class="home_page">
    <!-- header y buscador -->
    <q-parallax :height="455">
      <template v-slot:media>
        <img src="/images/bg.png" alt="Background Image" />
      </template>

      <template v-slot:content="scope">
        <div
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: scope.percentScrolled * 60 + '%',
            left: 0,
            right: 0,
          }"
        >
          <img
            class="morty_letters"
            src="/images/rick-title.png"
            alt="Morty Header Image"
          />
          <input-character-searcher />
        </div>
      </template>
    </q-parallax>
    <!-- header y buscador -->

    <!-- filtrado de generos -->
    <div class="tabs-section">
      <tabs-filter-character />
    </div>
    <!-- filtrado de generos -->

    <!-- body : cartas -->
    <div class="body">
      <div class="flex flex-center card_section">
        <div v-if="rickAndMortyCharacters.length > 0" class="row container">
          <div class="col-xs-12 col-sm-12 col-md-12 column_card">
            <show-favorites />
          </div>

          <div
            v-for="character in rickAndMortyCharacters"
            :key="character.id"
            class="col-xs-12 col-sm-12 col-md-4 column_card"
          >
            <small-home-card
              :character="character"
              @is-selected="onIsSelected"
            />
          </div>
        </div>
        <div v-else-if="rickAndMortyCharacters.length === 0">
          <delete-filters-message />
        </div>
      </div>
    </div>
    <!-- body : cartas -->

    <!-- footer -->
    <q-parallax :height="140">
      <template v-slot:media>
        <img src="/images/footer.png" lt="Morty footer" />
      </template>
    </q-parallax>
    <!-- footer -->

    <!-- loading -->
    <q-circular-progress
      v-if="loading"
      indeterminate
      rounded
      size="50px"
      color="primary"
      class="q-ma-md"
    />
    <!-- loading -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useDashboardStore } from "stores/dashboard";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import CharacterDetailsInfoContent from "src/components/CharacterDetailsInfoContent.vue";
import InputCharacterSearcher from "src/components/InputCharacterSearcher.vue";
import SmallHomeCard from "src/components/SmallHomeCard.vue";
import TabsFilterCharacter from "src/components/TabsFilterCharacter.vue";
import ShowFavorites from "src/components/ShowFavorites.vue";
import DeleteFiltersMessage from "src/components/DeleteFiltersMessage.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    InputCharacterSearcher,
    SmallHomeCard,
    TabsFilterCharacter,
    ShowFavorites,
    DeleteFiltersMessage,
  },
  setup() {
    const $q = useQuasar();
    const store = useDashboardStore();
    const { loading, rickAndMortyCharacters, selectedCharacter } =
      storeToRefs(store);

    const updateSelectedCharacter = (character) => {
      selectedCharacter.value = character;
    };

    const openCharacterDetailsDialog = () => {
      $q.dialog({
        component: CharacterDetailsInfoContent,
      });
    };

    const onIsSelected = (character) => {
      updateSelectedCharacter(character);
      openCharacterDetailsDialog();
    };

    return {
      loading,
      rickAndMortyCharacters,
      onIsSelected,
    };
  },
});
</script>
