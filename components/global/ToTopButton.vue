<template>
  <a v-if="shouldShowTopButton" 
    id="to-top-button" 
    href="javascript:void(0)"
    @click="scrollTo">
      <b-button pill variant="secondary" >
        <font-awesome-icon icon="arrow-circle-up" /> 
        Top
      </b-button>
    </a>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'

@Component
export default class ToTopButton extends Vue {
    shouldShowTopButton = false;

    get route() {
        return "/blanke-tech"+this.$route.path+"#";
    }

    mounted() {
        window.onscroll = () => {
            this.shouldShowTopButton = window.pageYOffset >= document.documentElement.clientHeight / 2;
        } 
    }

    scrollTo() {
        window.scrollTo(0,0);
    }
}
</script>

<style lang="scss">
#to-top-button {
  position: fixed;
  margin: 1rem 1rem;
  bottom: 0rem;
  right: 0;
  z-index: 100;
}
</style>