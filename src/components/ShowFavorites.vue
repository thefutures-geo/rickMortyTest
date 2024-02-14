<template>
  <div class="flex show_favorites items-center">
    <div class="text-subtitle2">Mostrar favoritos:</div>
    <q-btn
      class="q-mx-sm"
      round
      color="darkGrey"
      text-color="darkGrey"
      size="sm"
      icon="star"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useDashboardStore } from "stores/dashboard";

export default defineComponent({
  name: "TabsFilterCharacter",
  setup() {
    const tab = ref("All");
    const store = useDashboardStore();
    const { loading, rickAndMortyCharacters } = storeToRefs(store);

    return {
      tab,
    };
  },
});
</script>
