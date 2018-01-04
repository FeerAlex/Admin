<template lang="pug">
  textarea(
    :placeholder="placeholder"
    :value="val"
    @input="updateValue($event.target.value)"
  ).input
</template>

<script>
export default {
  props: {
    placeholder: String,
    val: String
  },
  methods: {
    updateValue: function (value) {
      this.$emit('updateInput', value)
    }
  }
}
</script>

<style lang="scss" src="styles/textarea.scss" scoped></style>