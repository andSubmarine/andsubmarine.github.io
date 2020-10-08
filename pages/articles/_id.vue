<template>
  <b-container>
    <b-row>
      <b-col>
        <article v-if="page">
          <h1>{{page.title}}</h1>
          <nuxt-content :document="page"/>
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Article extends Vue {
    page: any = {};

    async created() {
        const id = this.$route.params.id;
        console.log(id);
        const result = await this.$content("",id).fetch();
        console.log(result)
        this.page = result;
    }
}
</script>

<style>

</style>