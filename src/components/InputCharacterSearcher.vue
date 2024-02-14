<template>
  <q-input
    dark
    bg-color="primary"
    color="primary"
    label-color="white"
    outlined
    v-model="querySearchCharacter"
    label="Buscar personajes..."
    @update:model-value="handleInput"
  >
    <template v-slot:prepend>
      <q-icon name="search" color="white" />
    </template>
    <template v-slot:append>
      <q-icon name="settings" color="white" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useDashboardStore } from "stores/dashboard";
import { storeToRefs } from "pinia";
import { getCharacterInfo } from "src/api/apiService";

export default defineComponent({
  name: "InputCharacterSearcher",
  setup() {
    const store = useDashboardStore();
    const { querySearchCharacter, loading, rickAndMortyCharacters } =
      storeToRefs(store);

    let typingTimer;
    let doneTypingInterval = 1000;

    const handleInput = () => {
      loading.value = true;
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    };

    const doneTyping = () => {
      callToApi();
    };

    const callToApi = () => {
      getCharacterInfo("name", querySearchCharacter.value)
        .then((response) => {
          console.log("respondió!", response.data.results);
          rickAndMortyCharacters.value = response.data.results;
        })
        .catch((error) => {
          console.error("Error al recuperar los personajes:", error);
          rickAndMortyCharacters.value = [];
        })
        .finally(() => {
          loading.value = false;
        });
    };

    onMounted(() => {
      callToApi();
    });

    return {
      querySearchCharacter,
      handleInput,
    };
  },
});
</script>
