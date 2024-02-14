<template>
  <q-card flat bordered class="small-principal-card">
    <q-card-section horizontal>
      <img
        data-cy="small-card-image"
        @click="onIsSelected"
        :src="character.image"
      />
      <q-btn
        round
        class="absolute"
        color="darkGrey"
        text-color="darkGrey"
        size="sm"
        icon="star"
      />

      <q-separator vertical />
      <q-card-section data-cy="small-card" @click="onIsSelected" class="info">
        <div class="text-caption text-grey">
          <q-badge
            data-cy="small-card-status"
            rounded
            :color="character.status === 'Alive' ? 'green' : 'red'"
          />
          {{ character.status }} -
          {{ character.species }}
        </div>
        <div data-cy="small-card-name" class="text-subtitle2">
          {{ character.name }}
        </div>
        <div class="text-caption text-grey">Last known location:</div>
        <div data-cy="small-card-location" class="text-subtitle3">
          {{ character.location.name }}
        </div>
        <div class="text-caption text-grey">First seen in:</div>
        <div class="text-subtitle3">Never Ricking Morty</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
/* import { useQuasar } from "quasar";
import { useDashboardStore } from "stores/dashboard";
import { storeToRefs } from "pinia";
import CharacterDetailsInfoContent from "./CharacterDetailsInfoContent.vue"; */

export default defineComponent({
  name: "SmallHomeCard",
  emits: ["isSelected"],
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    const onIsSelected = () => {
      ctx.emit("isSelected", props.character);
    };

    return {
      onIsSelected,
    };
  },
});
</script>
