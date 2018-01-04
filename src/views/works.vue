<template lang="pug">
  .works
    app-title(:label="'Мои работы'")
    app-sub-title(:label="'Добавить работу'")
    .works__add
      .works__input
        span.error-mes {{ validation.firstError('newName') }}
        app-input(
          :placeholder="'Название проекта'"
          @change="val => newName = val"
          :class="{error: validation.hasError('newName')}"
        )
      .works__input
        span.error-mes {{ validation.firstError('newTech') }}
        app-input(
          :placeholder="'Технологии'"
          @change="val => newTech = val"
          :class="{error: validation.hasError('newTech')}"
        )
      .works__input
        span.error-mes {{ validation.firstError('newLink') }}
        app-input(
          :placeholder="'Ссылка'"
          @change="val => newLink = val"
          :class="{error: validation.hasError('newLink')}"
        )
      .works__file
        input(type="file" id="input-file"
        ).works__file-input
        label(for="input-file").works__file-label Загрузить картинку
    save-btn(
      :label="'Добавить'"
      @saveClick="addWork"
    )
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import { Validator } from 'simple-vue-validator';

export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    newName(value) {
      return Validator.value(value).required('Отсутствует заголовок!');
    },
    newTech(value) {
      return Validator.value(value).required('Отсутствуют технологии!');
    },
    newLink(value) {
      return Validator.value(value).required('Отсутствует ссылка!').url('Некорректная ссылка!');
    }
  },
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
      this.$validate().then(success => {
        if(!success) return;

        this.addNewWork({
          id: Math.round(Math.random() * 1000),
          name: this.newName,
          tech: this.newTech,
          link: this.newLink
        });

        this.newName = '';
        this.newTech = '';
        this.newLink = '';
        this.validation.reset();
      })
    }
  },
  created() {
    this.fetchWorks();
  },
  components: {
    saveBtn: require('../components/saveBtn.vue'),
    appTitle: require('../components/title.vue'),
    appSubTitle: require('../components/subtitle.vue'),
    appInput: require('../components/input.vue'),
  }
}
</script>

<style lang="scss" src="styles/works.scss" scoped></style>
