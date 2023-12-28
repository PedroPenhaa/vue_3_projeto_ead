<template>
  <div class="comments">
    <div class="header">
<!--      <span class="title">Dúvidas</span>-->
<!--      <button class="btn primary">-->
<!--        <i class="fas fa-plus"></i>-->
<!--        Enviar nova dúvida-->
<!--      </button>-->
    </div>

    <SupportsComponent />
  </div>
</template>

<script>
import SupportsComponent from "@/components/Supports.vue";

export default {
  name: "SupportsLesson",

  components: {
    SupportsComponent,
  },
};
</script>