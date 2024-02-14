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
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabsFilterCharacter",
});
</script>
