<template>
  <b-col id="page-2"  
    class="landing-pages d-flex flex-column">
    <b-row class="w-100">
      <h1 id="main-content" class="w-100 text-center">// projects & articles</h1>
    </b-row>
    <b-row id="card-group">
      <b-col cols="12" md="6" lg="4"
        v-for="article in articles" 
        v-bind:key="article.slug"
        class="article-card">
        <nuxt-link
          class="article-link"
          :to="{ name: 'articles-id', params: {id: article.slug}}"
        >
          <ArticleCard :article="article"/>
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
        No more articles
        <b-icon-emoji-dizzy 
          font-scale="1.5" 
          shift-v="-2">
        </b-icon-emoji-dizzy>
      </p>
    </b-row>
  </b-col>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Page2 extends Vue {
  articles: any = [];
  index = 0;
  hasMoreArticles = true;

  async fetchArticles(n: number = 2) {
    const nArticles = this.index + n;
    const moarticles = await this.$content("/").sortBy("updatedAt","desc").limit(nArticles).fetch();
    if (moarticles.length < n) {
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
#page-2 {
  background-color: #0D0D0D;
}
#main-content {
  margin: 2%;
  color: #fff;
  font-family: monospace;
}
#card-group {
  max-width: 100%;
}
#card-group .article-card {
  margin-bottom: 1rem;
}
.article-card, .card {
  height: 65vh;
}
#load-more {
  text-decoration: underline;
}
#load-more, #no-more {
  color: #fff;
}
#more {
  margin: 5%;
}
</style>