<template lang="pug">
.wrapper
  .main
    h3 Test
    #CtxEnv
      canvas(width="400" height="400")
</template>
<script>

import Vue from 'vue';
import vb from 'vue-babylonjs';
import env from '@/assets/js/canvas/ctxEnv';
env.use(ctxEnv);
Vue.use(vb);

export default {
  name: "Profile"
}
</script>