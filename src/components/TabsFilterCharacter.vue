<template>
  <q-tabs
    v-model="querySearchCharacterGender"
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
import { defineComponent } from "vue";
import { getCharacterInfo } from "src/api/apiService";
import { storeToRefs } from "pinia";
import { useDashboardStore } from "stores/dashboard";

export default defineComponent({
  name: "TabsFilterCharacter",
  setup() {
    const store = useDashboardStore();
    const {
      loading,
      rickAndMortyCharacters,
      querySearchCharacterGender,
      querySearchCharacterName,
    } = storeToRefs(store);

    // refresh data
    const callToApi = () => {
      loading.value = true;
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

    return {
      querySearchCharacterGender,
      callToApi,
    };
  },
});
</script>
