<template>
  <div>
    <div class="pageTitle">
      <span class="title">Meus Cursos</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="content">
      <ul class="listCourses">
        <card-couse
          :title="'Curso de laravel com Vue.js'"
          :image="''"
          :bgName="'laravel'"
        >
        </card-couse>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import CardCouse from "./components/CardCouse.vue";

export default {
  name: "HomeView",
  components: {
    CardCouse,
  },
};
</script>
