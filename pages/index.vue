<template>
  <b-container fluid class="p-0">
    <ToTopButton />
    <ImagePage first-id="about" second-id="articles" />
    <AboutPage />
    <ProjectPage />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ContentModule from '~/store/ContentModule'

@Component
export default class IndexPage extends Vue {
  head () {
    return {
      title: 'Homepage | ' + process.env.title,
      meta: [
        {
          hid: 'homepage'
        }
      ]
    }
  }

  created () {
    this.$store.registerModule('contentModule', ContentModule)
  }
}
</script>
