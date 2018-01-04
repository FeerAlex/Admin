<template lang="pug">
  input(type="text"
    :placeholder="placeholder"
    v-model="text"
    v-on:input="updateValue(text)"
  ).input
</template>

<script>
export default {
  props: {
    placeholder: String,
  },
  data() {
    return {
      text: this.val,
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('change', value)
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