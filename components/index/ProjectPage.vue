<template>
  <b-col
    id="articles"
    class="landing-pages d-flex flex-column"
    align-v="stretch"
  >
    <b-row id="projects-header" class="w-100">
      <h1 class="w-100 text-center">
        // projects & articles
      </h1>
    </b-row>
    <ArticleContainer :articles="articles" />
  </b-col>
</template>

<script lang="ts">
import { Component, getModule, Vue } from 'nuxt-property-decorator'
import ContentModule from '~/store/ContentModule'

@Component
export default class ProjectPage extends Vue {
  hasMoreArticles = true;

  get articles (): Array<any> {
    return getModule(ContentModule, this.$store).articles
  }

  async created () {
    await getModule(ContentModule, this.$store).fetchArticles(this)
  }
}
</script>

<style lang="scss">
#articles {
  background-color: #0D0D0D;
}
#projects-header {
  margin: 3vh;
  font-family: monospace;
}
#projects-header h1 {
  color: #fff;
  font-size: 5vw;
}

@media (min-width: 768px) {
  #projects-header h1, #load-more, #no-more {
    font-size: 4vw;
  }
}

@media (min-width: 992px) {
  #projects-header h1, #load-more, #no-more {
    font-size: 3vw;
  }
}

@media (min-width: 1400px) {
  #projects-header h1, #load-more, #no-more {
    font-size: 2vw;
  }
}
</style>
