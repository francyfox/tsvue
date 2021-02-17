<template lang="pug">
.nav
  ul
    li
      button.waves-effect.waves-light.btn-small(@click="progress = '33%'")
        router-link(to="/") 01. Конфигурация кровли
    li
      button.waves-effect.waves-light.btn-small(@click="progress = '66%'")
        router-link(to="/profile") 02. Профиль и размер
    li
      button.waves-effect.waves-light.btn-small(@click="progress = '100%'")
        router-link(to="/total") 03. Ваш итоговый расчет кровли
  .progress
    .determinate(v-bind:style="{width: progress}")
</template>

<script lang="ts">
export default {
  name: "indicator",
  data() {
    return {
      progress: '33%'
    }
  }
}
</script>

<style scoped>

</style>