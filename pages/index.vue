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
import ImagePage from '~/components/index/ImagePage.vue'
import AboutPage from '~/components/index/AboutPage.vue'
import ProjectPage from '~/components/index/ProjectPage.vue'

@Component({
  components: {
    ImagePage, AboutPage, ProjectPage
  }
})
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
