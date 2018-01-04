<template lang="pug">
  .blog
    app-title(:label="'Блог'")
    app-sub-title(:label="'Добавить запись'")
    .blog__add
      app-input(:placeholder="'Название'" @change="val => newName = val")
      app-input(:placeholder="'Дата'" @change="val => newDate = val")
      app-textarea(:placeholder="'Содержание'" @change="val => newDesc = val")
    save-btn(
      :label="'Добавить'"
      @saveClick="addArticle"
    )
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  data() {
    return {
      newName: '',
      newDate: '',
      newDesc: '',
    }
  },
  computed: {
    ...mapGetters(['articles'])
  },
  methods: {
    ...mapActions(['fetchArticles']),
    ...mapMutations(['addNewArticle']),
    addArticle() {
      this.addNewArticle({
        id: Math.round(Math.random() * 1000),
        name: this.newName,
        date: this.newDate,
        desc: this.newDesc
      });

      this.newName = "";
      this.newDate = "";
      this.newDesc = "";
    }
  },
  created() {
    this.fetchArticles();
  },
  components: {
    saveBtn: require('./saveBtn.vue'),
    appTitle: require('./title.vue'),
    appSubTitle: require('./subtitle.vue'),
    appInput: require('./input.vue'),
    appTextarea: require('./textarea.vue'),
  }
}
</script>

<style lang="scss" src="styles/blog.scss" scoped></style>
