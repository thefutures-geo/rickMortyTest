<template>
  <q-page class="flex flex-center welcome_page">
    <div class="absolute column items-center container">
      <img class="suizo" src="/images/suazo.png" />
      <img class="morty_letters" src="/images/rick-title.png" />
      <div class="welcome-message">
        <div class="text-h3 text-white text-center">
          Bienvenido a Rick and Morty
        </div>
        <div class="text-subtitle1 text-white text-center q-mt-md">
          En esta prueba, evaluaremos su capacidad para construir la aplicación
          mediante el análisis de código y la reproducción del siguiente diseño.
        </div>
        <div class="text-subtitle1 text-white text-center q-mt-xl">
          <q-btn
            @click="navigateToHome"
            rounded
            color="accent"
            size="lg"
            label="Continuar"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",

  setup(props) {
    const router = useRouter();

    return {
      navigateToHome() {
        router.push({ name: "homePage" });
      },
    };
  },
});
</script>
