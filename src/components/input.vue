<template lang="pug">
  input(type="text"
    :placeholder="placeholder"
    v-model="value"
    v-on:input="updateValue(value)"
  ).input
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: String
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    width: 300px;
    height: 45px;
    padding: 0 18px;
    border: none;
    outline: none;
    display: block;
    margin-bottom: 20px;
    font-family: 'Roboto';
    font-size: 16px;

    @include placeholder {
        color: rgba($blue, .5);
    }
  }
</style>