<template lang="pug">
  .works
    app-title(:label="'Мои работы'")
    app-sub-title(:label="'Добавить работу'")
    .works__add
      app-input(:placeholder="'Название проекта'" @change="val => newName = val")
      app-input(:placeholder="'Технологии'" @change="val => newTech = val")
      app-input(:placeholder="'Ссылка'" @change="val => newLink = val")
      .works__file
        input(type="file" id="input-file"
        ).works__file-input
        label(for="input-file").works__file-label Загрузить картинку
    save-btn(
      :label="'Добавить'"
      @saveClick="addWork"
    )
    ul(v-for="work in works")
      li {{work}}
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  data() {
    return {
      newName: '',
      newTech: '',
      newLink: ''
    }
  },
  computed: {
    ...mapGetters(['works'])
  },
  methods: {
    ...mapActions(['fetchWorks']),
    ...mapMutations(['addNewWork']),
    addWork() {
      this.addNewWork({
        id: Math.round(Math.random() * 1000),
        name: this.newName,
        tech: this.newTech,
        link: this.newLink
      });

      this.newName = "";
    }
  },
  created() {
    this.fetchWorks();
  },
  components: {
    saveBtn: require('./saveBtn.vue'),
    appTitle: require('./title.vue'),
    appSubTitle: require('./subtitle.vue'),
    appInput: require('./input.vue'),
  }
}
</script>

<style lang="scss" src="styles/works.scss" scoped></style>
