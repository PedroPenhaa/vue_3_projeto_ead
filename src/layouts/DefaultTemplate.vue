<template>
  <div>
    <header-component />

    <section>
      <router-view />
    </section>

    <footer-component />
  </div>
</template>



<script>
import { onBeforeMount } from "vue";
import FooterComponent from "./Components/FooterComponent.vue";
import HeaderComponent from "./Components/HeaderComponent.vue";

export default {
  setup() {
    onBeforeMount(() => {
      document.body.classList.add("page");
      document.body.classList.add("dark");

      document.title = "Curso EAD com Vue.js 3 - EspecializaTI";
    });
  },

  name: "DefaultTemplate",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>