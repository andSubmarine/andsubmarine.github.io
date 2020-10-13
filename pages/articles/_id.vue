<template>
  <article v-if="page">
    <ToTopButton />
    <BackButton route="/" />
    <b-img v-if="page.url" id="article-img" :src="page.url" fluid :alt="page.alt"></b-img>
    <div id="article-body">
      <h1>{{page.title}}</h1>
      <em id="description">{{page.description}}</em>
      <nuxt-content id="article-content" :document="page"/>
    </div>
  </article>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Article extends Vue {
    page: any = {};

    head() {
      return {
        title: this.page.title + " | " + process.env.title, 
        meta: [
          {
            hid: this.page.slug
          }
        ]
      }
    }

    async created() {
        const id = this.$route.params.id;
        if(id) {
          this.page = await this.$content("articles",id).fetch();
        } else {
          this.$router.push("/");
        }
    }
}
</script>

<style lang="scss">
article {
  background-color: #F2EEEB;
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
  max-height: 50vh;
  object-fit: cover;
  object-position: 0 0;
}
</style>