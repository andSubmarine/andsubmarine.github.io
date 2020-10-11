<template>
  <nuxt-link id="back-button" :to="route">
      <b-button pill variant="primary" >
        <font-awesome-icon icon="arrow-circle-left" /> 
        Go back
      </b-button>
    </nuxt-link>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'

@Component
export default class BackButton extends Vue {
    @Prop() route!: string;
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
</style>