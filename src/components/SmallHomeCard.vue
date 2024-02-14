<template>
  <q-card flat bordered class="small-principal-card">
    <q-card-section horizontal>
      <!-- image -->
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
      <!-- image -->

      <!-- content -->
      <q-separator vertical />
      <q-card-section data-cy="small-card" @click="onIsSelected" class="info">
        <!-- status -->
        <div data-cy="small-card-status" class="text-caption text-grey">
          <q-badge
            rounded
            :color="character.status === 'Alive' ? 'green' : 'red'"
          />
          {{ character.status }} -
          {{ character.species }}
        </div>
        <!-- name -->
        <div data-cy="small-card-name" class="text-subtitle2">
          {{ character.name }}
        </div>
        <!-- location -->
        <div class="text-caption text-grey">Last known location:</div>
        <div data-cy="small-card-location" class="text-subtitle3">
          {{ character.location.name }}
        </div>
        <div class="text-caption text-grey">First seen in:</div>
        <div class="text-subtitle3">Never Ricking Morty</div>
      </q-card-section>
    </q-card-section>
    <!-- content -->
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

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
    // Function to emit isSelected event
    const onIsSelected = () => {
      ctx.emit("isSelected", props.character);
    };

    return {
      onIsSelected,
    };
  },
});
</script>
