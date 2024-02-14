<template>
  <q-input
    dark
    bg-color="primary"
    color="primary"
    label-color="white"
    outlined
    v-model="querySearchCharacterName"
    label="Buscar personajes..."
    @update:model-value="handleInput"
  >
    <template v-slot:prepend>
      <q-icon name="search" color="white" />
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
    const {
      querySearchCharacterName,
      querySearchCharacterGender,
      loading,
      rickAndMortyCharacters,
    } = storeToRefs(store);

    let typingTimer;
    let doneTypingInterval = 1000;

    // this functions is for user typing
    const handleInput = () => {
      loading.value = true;
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    };

    // user finish typing
    const doneTyping = () => {
      callToApi();
    };

    // refresh data
    const callToApi = () => {
      getCharacterInfo({
        querySearchCharacterName: querySearchCharacterName.value,
        querySearchCharacterGender: querySearchCharacterGender.value,
      })
        .then((response) => {
          rickAndMortyCharacters.value = response.data.results;
        })
        .catch((error) => {
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
      querySearchCharacterName,
      handleInput,
    };
  },
});
</script>
