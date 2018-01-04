<template lang="pug">
  textarea(
    :placeholder="placeholder"
    v-model="text"
    v-on:input="updateValue(text)"
  ).input
</template>

<script>
export default {
  props: {
    placeholder: String,
    val: String
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

<style lang="scss" src="styles/textarea.scss" scoped></style>