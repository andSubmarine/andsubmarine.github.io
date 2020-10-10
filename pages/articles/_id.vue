<template>
  <article v-if="page">
    <nuxt-link id="back-button" to="/">
      <b-button pill variant="primary" >
        <b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill> 
        Go back
      </b-button>
    </nuxt-link>
    <b-img v-if="page.url" :src="page.url" fluid :alt="page.alt"></b-img>
    <div id="article-body">
      <h1>{{page.title}}</h1>
      <nuxt-content :document="page"/>
    </div>
  </article>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Article extends Vue {
    page: any = {};

    async created() {
        const id = this.$route.params.id;
        this.page = await this.$content("articles",id).fetch();
        console.log(this.page);
    }
}
</script>

<style lang="scss">
#back-button {
  position: fixed;
  margin: 1rem 1rem;
  bottom: 0;
  left: 0;
  z-index: 100;
}
article {
  background-color: #F2EEEB;
  min-height: 100vh;
}
#article-body {
  padding: 1rem 2rem;
  padding-bottom: 5rem;
}
.img-fluid {
  min-width: 100%;
}
@media (min-width: 768px) { 
  article {
    margin: 0 4rem;
  }
  #back-button {
    margin: 1.5rem 5rem;
  }
}
</style>