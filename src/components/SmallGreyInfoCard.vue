<template>
  <q-card flat bordered class="small_grey_info">
    <q-card-section>
      <slot name="top-content"></slot>
      <slot name="center-content"></slot>
      <slot name="bottom-content"></slot>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SmallGreyInfoCard",
});
</script>
