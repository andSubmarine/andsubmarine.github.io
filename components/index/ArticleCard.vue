<template>
    <b-card v-if="article.url"
        overlay no-body
        :img-src="article.url"
        :img-alt="article.alt"
        text-variant="white"
        tag="article"
        :title="article.title"
    >
      <b-card-body>
        <h2>{{article.title}}</h2>
        <p>{{article.description}}</p>
      </b-card-body>
      <template v-slot:footer>
        <small>Last updated: {{updatedAt}}</small>
      </template>
    </b-card>
    <b-card v-else no-body
        tag="article"
        text-variant="white">
      <b-card-body>
        <h2>{{article.title}}</h2>
        <p>{{article.description}}</p>
      </b-card-body>
      <template v-slot:footer>
        <small>Last updated: {{updatedAt}}</small>
      </template>
    </b-card>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'

@Component
export default class ArticleCard extends Vue {
  @Prop() article: any;

  get updatedAt() {
    const date = new Date(this.article.updatedAt);
    return date.toLocaleString()
  }
}
</script>

<style lang="scss">
.article-link {
  color: white;
  &:hover {
    color: white;
  }
}
.card {
  background-color: #D95F5F;
  &:hover {
    background-color: #D68C8C;
  }
}
.card-title, .card-text {
  text-shadow: 1px 1px #000;
}
</style>