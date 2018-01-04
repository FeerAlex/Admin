<template lang="pug">
  .skills__list
    app-sub-title(:label="skillsType").subtitle--about
    table.skills__table
      skills-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
        v-if="checkSkillType(skillsType) == skill.type"
        @removeSkill="removeSkill"
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
      skillsType: String,
      skills: Array
  },
  data() {
    return {
      newSkill: ''
    }
  },
  methods: {
    ...mapMutations(['addNewSkill', 'removeExistedSkill']),
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
    checkSkillType(skillType) {
      switch (skillType) {
        case 'Frontend' :
          return 1;
        case 'Workflow' :
          return 2;
        case 'Backend' :
          return 3;
      }
    }
  },
  components: {
    skillsItem: require('./skillsItem.vue'),
    appSubTitle: require('./subtitle.vue'),
  }
}
</script>

<style lang="scss" src="styles/skillsList.scss" scoped></style>
