<template lang="pug">
  .about
    app-title(
      :label="'Обо мне'"
    )
    .skills
      skills-list(
          v-for="(skillsType, index) in skillsTypes"
          :key="index"
          :skillsType="skillsType"
          :skills="skills"
      )
    save-btn(
      :label="'Сохранить'"
    )
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
      return {
        skillsTypes: ['Frontend', 'Workflow', 'Backend']
      }
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills'])  
  },
  created() {
    this.fetchSkills();
  },
  components: {
    skillsList: require('../components/skillsList.vue'),
    saveBtn: require('../components/saveBtn.vue'),
    appTitle: require('../components/title.vue'),
  }
}
</script>

<style lang="scss" src="styles/about.scss" scoped></style>