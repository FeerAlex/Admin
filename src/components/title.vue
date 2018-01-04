<template lang="pug">
  h1.title Страница &laquo;{{label}}&raquo;
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font-size: 21px;
    margin: 0;
    font-weight: 400;
    margin-bottom: 43px;
  }
</style>