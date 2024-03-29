<template>
  <div>
    <b-container v-if="page" tag="article" class="article-page">
      <ToTopButton />
      <BackButton route="/" />
      <div class="row">
        <b-img v-if="page.url" id="article-img" :src="page.url" fluid :alt="page.alt" />
        <div id="article-body">
          <h1>{{ page.title }}</h1>
          <em id="description">{{ page.description }}</em>
          <nuxt-content id="article-content" :document="page" />
          <nuxt-link v-if="nextArticle && nextArticle.slug" :to="{ name: 'articles-id', params: {id: nextArticle.slug}}">
            Want to read more? Continue reading this article!
          </nuxt-link>
          <hr>
          <b-media>
            <template #aside>
              <b-img src="/blob/profile.jpg" blank-color="#ccc" width="64" alt="author profile" />
            </template>
            <p class="mb-1">
              <em>Written by Andreas Blanke. <span v-if="lastUpdated">{{ lastUpdated }}</span></em>
            </p>
            <p class="mb-1">
              <SocialMedia type="linkedin" />
            </p>
            <p class="mb-1">
              <SocialMedia type="github" />
            </p>
          </b-media>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, getModule, Vue } from 'nuxt-property-decorator'
import ContentModule from '~/store/ContentModule'

@Component
export default class Article extends Vue {
  page: any = {};
  nextArticle: any = {};

  get lastUpdated () {
    if (this.page) {
      return 'Last updated: ' + new Date(this.page.updatedAt).toLocaleString('en-GB', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
      })
    } else { return undefined }
  }

  head () {
    return {
      title: this.page.title + ' | ' + process.env.title,
      meta: [
        {
          hid: this.page.slug
        },
        {
          hid: 'description',
          name: 'description',
          content: (this.page.description) ? this.page.description : 'description'
        }
      ]
    }
  }

  async created () {
    const id = this.$route.params.id
    if (id) {
      this.page = await this.$content('articles', id).fetch()
    } else {
      this.$router.push('/')
    }
  }

  mounted () {
    this.findNextArticle()
  }

  findNextArticle () {
    const articles = getModule(ContentModule, this.$store).articles

    const pageIndex = articles.findIndex(item => item.slug === this.page.slug)

    this.nextArticle = (pageIndex - 1 >= 0) ? articles[pageIndex - 1] : articles[articles.length - 1]
  }
}
</script>

<style lang="scss">
.article-page {
  background-color: #ffffff;
  min-height: 100vh;
}
#article-body {
  max-width: 100%;
  padding: 1rem 2rem;
  padding-bottom: 5rem;
}
#description {
  font-size: 1.2rem;
  margin: 2rem 0;
}
#article-content {
  margin-top: 1rem;
}
.img-fluid {
  width: 100%;
}
#article-img {
  object-fit: cover;
  object-position: 0 0;
}
</style>
