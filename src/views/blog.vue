<template lang="pug">
  .blog
    app-title(:label="'Блог'")
    app-sub-title(:label="'Добавить запись'")
    .blog__add
      .blog__input
        span.error-mes {{ validation.firstError('newTitle') }}
        app-input(
          :placeholder="'Название'"
          :val="newTitle"
          @updateInput="val => newTitle = val"
          :class="{error: validation.hasError('newTitle')}"
        )
      .blog__input
        span.error-mes {{ validation.firstError('newDate') }}
        app-input(
          :placeholder="'Дата'"
          :val="newDate"
          @updateInput="val => newDate = val"
          :class="{error: validation.hasError('newDate')}"
        )
      .blog__input
        span.error-mes {{ validation.firstError('newDesc') }}
        app-textarea(
          :placeholder="'Содержание'"
          :val="newDesc"
          @updateInput="val => newDesc = val"
          :class="{error: validation.hasError('newDesc')}"
        )
    save-btn(
      :label="'Добавить'"
      @saveClick="addArticle"
    )
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import { Validator } from 'simple-vue-validator';

export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    newTitle(value) {
      return Validator.value(value).required('Заголовок отсутствует!');
    },
    newDate(value) {
      return Validator.value(value).required('Дата отсутствует!');
      // return Validator.value(value).required('Заполните поле').regex('^\d{1,2}.\d{1,2}.\d{4}$', 'Неверный формат');
    },
    newDesc(value) {
      return Validator.value(value).required('Описание отсутствует!');
    }
  },
  data() {
    return {
      newTitle: '',
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
      this.$validate().then(success => {
        if(!success) return;

        this.addNewArticle({
          title: this.newTitle,
          date: this.newDate,
          desc: this.newDesc
        });

        this.newTitle = "";
        this.newDate = "";
        this.newDesc = "";
        this.validation.reset();
      })
    }
  },
  created() {
    this.fetchArticles();
  },
  components: {
    saveBtn: require('../components/saveBtn.vue'),
    appTitle: require('../components/title.vue'),
    appSubTitle: require('../components/subtitle.vue'),
    appInput: require('../components/input.vue'),
    appTextarea: require('../components/textarea.vue'),
  }
}
</script>

<style lang="scss" src="styles/blog.scss" scoped></style>
