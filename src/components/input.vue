<template lang="pug">
  input(
    type="text"
    :placeholder="placeholder"
    @input="updateValue($event.target.value)"
    :value="val"
  ).input
</template>

<script>
export default {
  props: {
    placeholder: String,
    val: String
  },
  methods: {
    updateValue(value) {
      this.$emit('updateInput', value)
    }
  }
}
</script>

<style lang="scss" src="styles/input.scss" scoped></style>