<template>
  <b-container fluid class="p-0">
    <ToTopButton />
    <ImagePage first-id="about" second-id="more" />
    <AboutPage />
    <ProjectPage />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
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
}
</script>
