<template>
  <b-container fluid class="p-0">
    <ToTopButton />
    <ImagePage firstId="about" secondId="more"/>
    <AboutPage/>
    <ProjectPage/>
  </b-container>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'
@Component
export default class IndexPage extends Vue {
  head() {
      return {
        title: "Homepage | " + process.env.title, 
        meta: [
          {
            hid: "homepage"
          }
        ]
      }
    }
}
</script>