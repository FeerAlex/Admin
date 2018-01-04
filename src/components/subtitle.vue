<template lang="pug">
  h2.subtitle {{label}}
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
  .subtitle {
    font-weight: 500;
    margin: 0;
    margin-bottom: 16px;
    font-size: 16px;

    @media(max-width: 500px) {
      font-size: 14px;
    }

    &--about {
      margin-bottom: 8px;
    }
  }
</style>