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
      text: '',
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" src="styles/input.scss" scoped></style>