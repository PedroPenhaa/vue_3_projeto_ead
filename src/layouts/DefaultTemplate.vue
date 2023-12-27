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
import FooterComponent from "./Components/FooterComponent.vue";
import HeaderComponent from "./Components/HeaderComponent.vue";

export default {
  name: "DefaultTemplate",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>