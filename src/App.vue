<template lang="pug">
  #app
    .header
      app-header
    .tabs
      app-tabs
    .content
      transition(name="slide-fade" mode="out-in")
        router-view
</template>

<script>

export default {
  components: {
    appHeader: require('./components/header.vue'),
    appTabs: require('./components/tabs.vue')
  }
}
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>