<template lang="pug">
  #app
    .header
      app-header
    .tabs
      app-tabs
    .content
      router-view
</template>

<script>

export default {
  components: {
    appHeader: require('./components/header.vue'),
    appTabs: require('./components/tabs.vue'),
    appAbout: require('./components/about.vue'),
  }
}
</script>

<style lang="scss" scoped></style>