<template lang="pug">
  .skills__list
    app-sub-title(:label="skillsType.title").subtitle--about
    table.skills__table
      skills-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
        v-if="skillsType._id == skill.skillType"
        @removeSkill="removeSkill"
        @updateSkill="updateSkill"
      )
    .addButton
      button(
        type="button"
        @click="addSkill"
      ) Добавить новый скилл
      input(
        type="text"
        v-model="newSkill"
        @keydown.enter="addSkill"
        :class="{error: validation.hasError('newSkill')}"
      )
      div {{ validation.firstError('newSkill') }}
</template>

<script>
import { mapMutations } from 'vuex';
import { Validator } from 'simple-vue-validator';

export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    newSkill(value) {
      return Validator.value(value).required('Поле должно быть заполнено!')
    }
  },
  props: {
      skillsType: Object,
      skills: Array
  },
  data() {
    return {
      newSkill: ''
    }
  },
  methods: {
    ...mapMutations(['addNewSkill', 'removeExistedSkill', 'updateExistedSkill']),
    addSkill() {
      this.$validate().then(success => {
        if(!success) return;
        this.addNewSkill({
          id: Math.round(Math.random() * 1000),
          name: this.newSkill,
          percents: 0,
          type: this.checkSkillType(this.skillsType)
        });

        this.newSkill = "";
        this.validation.reset();
      })
    },
    removeSkill(skillID) {
      this.removeExistedSkill(skillID)
    },
    updateSkill(skillID, percents) {
      this.updateExistedSkill({skillID, percents})
    }
  },
  components: {
    skillsItem: require('./skillsItem.vue'),
    appSubTitle: require('./subtitle.vue'),
  }
}
</script>

<style lang="scss" src="styles/skillsList.scss" scoped></style>
