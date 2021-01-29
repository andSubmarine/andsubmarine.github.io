<template>
  <b-card-group
    v-if="articles && articles.length > 0"
    class="d-flex justify-content-around align-items-start align-content-around flex-wrap"
  >
    <nuxt-link
      v-for="article in articles"
      :key="article.slug"
      :to="{ name: 'articles-id', params: {id: article.slug}}"
      class="article-card"
    >
      <b-card
        :title="article.title"
        :img-src="article.url"
        :img-alt="article.alt"
        img-top
        tag="article"
      >
        <b-card-text>
          {{ article.description }}
        </b-card-text>
        <template #footer>
          <small class="text-muted">Published {{ publishedAt(article) }}</small>
          <div class="d-flex justify-content-center">
            <div class="m-2">
              Tags:
            </div>
            <div v-for="tag in tags(article)" :key="tag" class="tag m-2">
              {{ tag }}
            </div>
          </div>
        </template>
      </b-card>
    </nuxt-link>
  </b-card-group>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ArticleContainer extends Vue {
    @Prop() articles!: any;

    publishedAt (article: any) {
      return new Date(article.published).toLocaleString('en-GB', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      })
    }

    tags (article: any) {
      if (article.tags) {
        return article.tags
      } else { return [] }
    }
}
</script>

<style lang="scss">
.article-card {
    margin: 1rem;
    text-decoration: none !important;
    color: black;
    & :hover {
        color: black;
    }

    & .card {
        & .card-title {
            font-size: 5vw;
        }
        & .card-body {
            font-size: 4vw;
        }
        & .card-footer {
            font-size: 3vw;
        }
    }
}

.tag {
  background-color: black;
  color: white;
  border-radius: .5rem;
  padding: .05rem .4rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

@media (min-width: 768px) {
    .article-card .card {
        & .card-title {
            font-size: 4vw;
        }
        & .card-body {
            font-size: 3vw;
        }
        & .card-footer {
            font-size: 2vw;
        }
    }
}

@media (min-width: 992px) {
    .article-card .card {
        & .card-title {
            font-size: 3vw;
        }
        & .card-body {
            font-size: 2vw;
        }
        & .card-footer {
            font-size: 1.5vw;
        }
    }
 }

 @media (min-width: 1400px) {
    .article-card .card {
        & .card-title {
            font-size: 2.5vw;
        }
        & .card-body {
            font-size: 1.5vw;
        }
        & .card-footer {
            font-size: 1vw;
        }
    }
 }
 @media (min-width: 2000px) {
    .article-card .card {
        & .card-title {
            font-size: 2vw;
        }
        & .card-body {
            font-size: 1vw;
        }
        & .card-footer {
            font-size: 0.5vw;
        }
    }
 }
</style>
