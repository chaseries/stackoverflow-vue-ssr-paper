<template>
  <div>
    <layout-header></layout-header>
    Home page
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";

export default {
  name: "page-home",
  components: {
    LayoutHeader
  },
  mounted() {
    let paper;
    if (process.browser) {
      paper = require("paper");
      paper.setup(document.getElementById("myCanvas"));
      const path = new paper.Path();
      path.moveTo(0,0);
      path.lineTo(100,100);
      path.strokeColor = "black";
    }
  }
};
</script>
