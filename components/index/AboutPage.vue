<template>
  <b-row
    id="about"
    class="landing-pages"
    align-v="stretch"
  >
    <b-col cols="12" xl="6">
      <nuxt-content id="about-content" :document="page" class="d-flex flex-column justify-content-center align-items-center" />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex justify-content-center align-items-center">
      <b-img
        fluid
        center
        alt="rubber duck"
        src="/blob/background-3.jpg"
        blank-color="#ccc"
        class="rubber-duck"
      />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AboutPage extends Vue {
  page: any = {};
  async created () {
    this.page = await this.$content('about', 'intro').fetch()
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
  font-size: 3vw;

  & a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: #b4dab6;
    }
  }

  & .nuxt-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.rubber-duck {
  max-width: 80%;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  #about-content {
    font-size: 2vw;
  }
}

@media (min-width: 992px) {
  #about-content {
    font-size: 1.5vw;
  }
}

@media (min-width: 1400px) {
  #about-content {
    font-size: 1vw;
  }
}
</style>
