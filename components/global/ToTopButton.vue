<template>
  <div
    v-if="shouldShowTopButton"
    id="to-top-button"
  >
    <b-button
      pill
      variant="secondary"
      @click="scrollTo"
    >
      <font-awesome-icon icon="arrow-circle-up" />
      Top
    </b-button>
  </div>
</template>

<script lang="ts">
import { Coords, coords, scrollToElement } from '@/scripts/Coords'
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ToTopButton extends Vue {
  shouldShowTopButton = false;

  get route () {
    return '/' + this.$route.path + '#'
  }

  mounted () {
    window.onscroll = () => {
      this.shouldShowTopButton = window.pageYOffset >= document.documentElement.clientHeight / 2
    }
  }

  scrollTo () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss">
#to-top-button {
  position: fixed;
  margin: 1rem 1rem;
  bottom: 0rem;
  left: 0;
  z-index: 100;
}
</style>
