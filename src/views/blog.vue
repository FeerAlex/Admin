<template lang="pug">
  .blog
    app-title(:label="'Блог'")
    app-sub-title(:label="'Добавить запись'")
    .blog__add
      app-input(:placeholder="'Название'" @change="val => newName = val" :class="{error: validation.hasError('newName')}")
      app-input(:placeholder="'Дата'" @change="val => newDate = val" :class="{error: validation.hasError('newDate')}")
      app-textarea(:placeholder="'Содержание'" @change="val => newDesc = val" :class="{error: validation.hasError('newDesc')}")
    save-btn(
      :label="'Добавить'"
      @saveClick="addArticle"
    )
    div {{ validation.firstError('newName') }}
    div {{ validation.firstError('newDate') }}
    div {{ validation.firstError('newDesc') }}
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import { Validator } from 'simple-vue-validator';

export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    newName(value) {
      return Validator.value(value).required('Заполните поле');
    },
    newDate(value) {
      return Validator.value(value).required('Заполните поле');
      // return Validator.value(value).required('Заполните поле').regex('^\d{1,2}.\d{1,2}.\d{4}$', 'Неверный формат');
    },
    newDesc(value) {
      return Validator.value(value).required('Заполните поле');
    }
  },
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
      this.$validate().then(success => {
        if(!success) return;

        this.addNewArticle({
          id: Math.round(Math.random() * 1000),
          name: this.newName,
          date: this.newDate,
          desc: this.newDesc
        });

        this.newName = "";
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
