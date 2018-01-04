<template lang="pug">
  .tabs
    ul.list
        li.item(v-for="tab in tabs")
            router-link(
                :to="tab.href"
                exact-active-class="link--active"
            ).link {{tab.title}}
</template>

<script>
export default {
  data() {
      return {
          tabs : [
              { title: "Обо мне", href: '/' },
              { title: "Мои работы", href: '/works' },
              { title: "Блог", href: '/blog' }
            ]
      }
  }
}
</script>

<style lang="scss" src="styles/tabs.scss" scoped></style>