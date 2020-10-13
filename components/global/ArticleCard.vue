<template>
    <b-card 
        no-body
        text-variant="white"
        :title="article.title"
        v-bind:class="{
          'card-bg-red': index % 4 === 0,
          'card-bg-blue': index % 4 === 1,
          'card-bg-green': index % 4 === 2,
          'card-bg-purple': index % 4 === 3
        }"
    >
      <template v-if="article.url" v-slot:header >
        <b-card-img-lazy :src="article.url" :alt="article.alt" />
      </template>
      <b-card-body v-bind:class="{ 'card-no-img': article.url === undefined } ">
        <h2 class="card-title">{{article.title}}</h2>
        <p class="card-text text-truncate">{{article.description}}</p>
      </b-card-body>
      <template v-slot:footer>
        <small>Last updated: {{updatedAt}}</small>
      </template>
    </b-card>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator';

@Component
export default class ArticleCard extends Vue {
  @Prop() article: any;
  @Prop({ default: 0 }) index!: number;

  get updatedAt() {
    return new Date(this.article.updatedAt).toLocaleString("en-GB");
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
.card-bg-red {
  background-color: #D95F5F;
  &:hover {
    background-color: #D68C8C;
  }
}
.card-bg-blue {
  background-color: #6072A6;
  &:hover {
    background-color: #7380A6;
  }
}
.card-bg-green {
  background-color: #26732B;
  &:hover {
    background-color: #4B8E50;
  }
}
.card-bg-purple {
  background-color: #E040FB;
  &:hover {
    background-color: #c361d4;
  }
}

.card-header, .card-header img {
  height: 20vh;
  padding: 0;
}

.card-header img {
  object-fit: cover;
  background-position: center top;
}

.card-no-img {
  height: 40vh !important;
}

.card-body {
  height: 20vh;
}

.card-footer {
  height: 10vh;
}

.card-title {
  height: 6vh;
  font-size: 170%;
}

.card-title, .card-text {
  text-shadow: 1px 1px #000;
}

.card-text {
  min-height: 14vh;
  max-height: 34vh;
}

</style>