<template>
  <div>
    <div class="pageTitle">
      <span class="title">Minhas Dúvidas</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="content">
      <div class="container">



        <div class="right">
          <div class="content">

            <supports />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Supports from "@/views/modules/components/Supports.vue";


export default {
  name: "MySupports",
  components: {Supports},
};
</script>