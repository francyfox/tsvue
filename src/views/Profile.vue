<template lang="pug">
.wrapper
  .main
    h3 Test
    Scene
      Box(:position="[0, 0, 5]")
</template>
<script>

import Vue from 'vue';
import vb from 'vue-babylonjs';
Vue.use(vb);

export default {
  name: "Profile"
}
</script>