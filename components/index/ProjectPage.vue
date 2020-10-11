<template>
  <b-col id="articles" 
    class="landing-pages d-flex flex-column" 
    align-v="stretch">
    <b-row id="projects-header" class="w-100">
      <h1 class="w-100 text-center">// projects & articles</h1>
    </b-row>
    <b-row id="card-group">
      <b-col cols="12" sm="6" lg="4"
        v-for="(article, index) in articles" 
        v-bind:key="article.slug"
        class="article-card">
        <nuxt-link
          class="article-link"
          :to="{ name: 'articles-id', params: {id: article.slug}}"
        >
          <ArticleCard :article="article" :index="index"/>
        </nuxt-link>
      </b-col>
    </b-row>
    <b-row id="more">
      <a v-if="hasMoreArticles" 
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
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class ProjectPage extends Vue {
  articles: any = [];
  index = 0;
  hasMoreArticles = true;

  async fetchArticles(n: number = 2) {
    const nArticles = this.index + n;
    const moarticles = await this.$content("articles").sortBy("updatedAt","desc").limit(nArticles).fetch();
    if (moarticles.length < nArticles) {
      this.hasMoreArticles = false;
      this.index = moarticles.length;
    } else {
      this.index += n;
    }
    this.articles = moarticles;
  }

  async created() {
    await this.fetchArticles(4);
  }
}
</script>

<style lang="scss">
#articles {
  background-color: #0D0D0D;
}
#projects-header {
  margin: 3vh;
  color: #fff;
  font-family: monospace;
}
#card-group {
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
#card-group > [class*='col-'] {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
#load-more {
  text-decoration: underline;
}
#load-more, #no-more {
  color: #fff;
  font-size: 3vw;
}
#more {
  margin-bottom: 4%;
}
</style>