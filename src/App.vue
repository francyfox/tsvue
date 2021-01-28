<template lang="pug">
#app
  indicator
  transition(:name="transitionName" mode="out-in" @beforeLeave="beforeLeave" @enter="enter")
    router-view
</template>

<style lang="less">
@import "assets/css/main";
</style>

<script lang="ts">
  const DEFAULT_TRANSITION = 'slide';

  import Vue from 'vue';
  import Config from "@/views/Config.vue"
  import indicator from "@/components/indicator.vue";

  export default Vue.extend({
    data() {
      return {
        prevHeight: 0,
        transitionName: DEFAULT_TRANSITION,
      }
    },
    components: {
      indicator,
      Config
    },
    created() {
      this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
      });
    },

    methods: {
      beforeLeave(element: any) {
        this.prevHeight = parseInt(getComputedStyle(element).height);
      },
      enter(element: any) {
        const {height} = getComputedStyle(element);

        element.style.height = this.prevHeight;

        setTimeout(() => {
          element.style.height = height;
        });
      },
    }
  })
</script>