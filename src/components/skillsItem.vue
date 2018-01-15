<template lang="pug">
  tr.skills__row
    td.skills__col-name {{skill.name}}
    td.skills__col-value
        input(type="text" :value="skill.percents" @change="updateSkill($event.target.value)").skills__input
    td.skills__col-percent %
    td.skills__col-btn
        button(
            type="button"
            @click="removeSkill"
        ).skills__remove Удалить
</template>

<script>
export default {
  props: {
    skill: Object
  },
  methods: {
    removeSkill() {
      this.$emit('removeSkill', this.skill._id)
    },
    updateSkill(percents) {
      this.$emit('updateSkill', this.skill._id, percents)
    }
  }
}
</script>

<style lang="scss" src="styles/skillsItem.scss" scoped></style>
