<template>
    <b-row id="about" 
      class="landing-pages" 
      align-v="stretch">
      <b-col>
        <nuxt-content id="about-content" :document="page"/>
      </b-col>
    </b-row>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class AboutPage extends Vue {
  page: any = {};
  async created() {
    this.page = await this.$content("about","intro").fetch();
  }
}
</script>

<style lang="scss">
#about {
  background-color: #26732B;
}

#about-content {
  padding: 4vh 2vw;
  color: white;
  height: 100% ;
}

#about-content a {
  color: white;
  text-decoration: underline;
  &:hover {
    color: #b4dab6;
  }
}

</style>