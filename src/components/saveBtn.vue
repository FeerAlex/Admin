<template lang="pug">
  button(
    type="button"
    @click="saveClick"
  ).btn {{label}}
</template>

<script>
export default {
  props: {
    label: String
  },
  methods: {
    saveClick() {
        this.$emit('saveClick')
    }
  }
}
</script>

<style lang="scss" src="styles/btn.scss" scoped></style>
