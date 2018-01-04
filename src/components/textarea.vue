<template lang="pug">
  textarea(
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

<style lang="scss" src="styles/textarea.scss" scoped></style>