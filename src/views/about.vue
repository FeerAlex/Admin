<template lang="pug">
  .about
    app-title(
      :label="'Обо мне'"
    )
    .skills
      skills-list(
          v-for="skillsType in skillsTypes"
          :key="skillsType._id"
          :skillsType="skillsType"
          :skills="skills"
      )
    save-btn(
      :label="'Сохранить'"
      @saveClick="saveSkills"
    )
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {HTTP} from '../http-common';
import qs from 'qs';

export default {
  data() {
      return {
        skillsTypes: []
      }
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills', 'updateSkills']),
    saveSkills() {
      this.updateSkills();
    }
  },
  created() {
    this.fetchSkills();
    HTTP.get(`api/skillTypes`)
      .then(res => {
        this.skillsTypes = res.data.skillTypes;
      })
      .catch(e => {
        console.log(e);
      })
  },
  components: {
    skillsList: require('../components/skillsList.vue'),
    saveBtn: require('../components/saveBtn.vue'),
    appTitle: require('../components/title.vue'),
  }
}
</script>

<style lang="scss" src="styles/about.scss" scoped></style>