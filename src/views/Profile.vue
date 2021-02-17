<template lang="pug">
.wrapper
  .main
    h3 Test
<<<<<<< HEAD
    #CtxEnv
      canvas(width="400" height="400")
=======
    #CanvasWrapper
      canvas(width=400 height=200)

>>>>>>> e99930b87efd0e189184a760a3fc32af81a337cb
</template>
<script>

require('/src/assets/js/canvas/CanvasEnv.js');
import Vue from 'vue';
import vb from 'vue-babylonjs';
import env from '@/assets/js/canvas/ctxEnv';
env.use(ctxEnv);
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