<template lang="pug">
.wrapper
  .main
    h3 Test
    #CanvasWrapper
      canvas(width=400 height=200)

</template>
<script>

require('/src/assets/js/canvas/CanvasEnv.js');
import Vue from 'vue';
import vb from 'vue-babylonjs';
Vue.use(vb);

export default {
  name: "Profile",

  data: function (){
    return {
      scene: 0
    }
  }
}
</script>