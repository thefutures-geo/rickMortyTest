<template>
  <div class="q-mt-lg">
    <div class="text-h5 text-weight-medium text-center">Uh-oh!</div>
    <div class="text-h5 text-subtitle1 text-center q-mt-sm">
      ¡Pareces perdido en tu viaje!
    </div>

    <div class="flex flex-center delete_filters q-mt-lg">
      <q-btn
        @click="deleteFilters"
        rounded
        color="accent"
        size="md"
        label="Eliminar filtros"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useDashboardStore } from "stores/dashboard";
import { storeToRefs } from "pinia";
import { getCharacterInfo } from "src/api/apiService";

export default defineComponent({
  name: "DeleteFiltersMessage",
  setup() {
    const store = useDashboardStore();
    const {
      loading,
      rickAndMortyCharacters,
      querySearchCharacterName,
      querySearchCharacterGender,
    } = storeToRefs(store);

    const deleteFilters = () => {
      querySearchCharacterName.value = "";
      querySearchCharacterGender.value = "All";

      callToApi();
    };

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

    return {
      deleteFilters,
    };
  },
});
</script>
