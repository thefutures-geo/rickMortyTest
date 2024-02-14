<template>
  <q-tabs
    v-model="tab"
    active-color="secondary"
    class="bg-grey-3"
    @click="callToApi"
  >
    <q-tab name="All" label="All" />
    <q-tab name="Unknown" label="Unknown" />
    <q-tab name="Female" label="Female" />
    <q-tab name="Male" label="Male" />
    <q-tab name="Genderless" label="Genderless" />
  </q-tabs>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { getCharacterInfo } from "src/api/apiService";
import { storeToRefs } from "pinia";
import { useDashboardStore } from "stores/dashboard";

export default defineComponent({
  name: "TabsFilterCharacter",
  setup() {
    const tab = ref("All");
    const store = useDashboardStore();
    const { loading, rickAndMortyCharacters } = storeToRefs(store);

    const callToApi = () => {
      loading.value = true;
      const value = tab.value !== "All" ? tab.value : "";
      getCharacterInfo("gender", value)
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

    return {
      tab,
      callToApi,
    };
  },
});
</script>
