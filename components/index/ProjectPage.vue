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
    <b-row id="more">
      <a
        v-if="hasMoreArticles"
        id="load-more"
        href="javascript:void(0)"
        @click="fetchArticles()"
      > Load more...
      </a>
      <p v-else id="no-more">
        <font-awesome-icon icon="sad-cry" />
        No more articles
        <font-awesome-icon icon="sad-cry" />
      </p>
    </b-row>
  </b-col>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ProjectPage extends Vue {
  articles: any = [];
  index = 0;
  hasMoreArticles = true;

  async fetchArticles (n: number = 6) {
    const nArticles = this.index + n
    const moarticles = await this.$content('articles')
      .sortBy('published', 'desc')
      .limit(nArticles)
      .fetch()
    // const moarticles = result.filter((article: any) =>
    //  article &&
    //  article.published &&
    //  new Date(article.published).getTime() < new Date().getTime())
    if (moarticles.length < nArticles) {
      this.hasMoreArticles = false
      this.index = moarticles.length
    } else {
      this.index += n
    }
    this.articles = moarticles
  }

  async created () {
    await this.fetchArticles(6)
  }
}
</script>

<style lang="scss">
#articles {
  background-color: #0D0D0D;
}
#projects-header, #more {
  margin: 3vh;
  font-family: monospace;
}
#load-more {
  text-decoration: underline;
}
#projects-header h1, #load-more, #no-more {
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
