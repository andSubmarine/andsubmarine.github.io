<template>
  <b-container class="error-page" fluid>
    <b-row>
      <b-col class="text-center">
        <h1 class="m-4 text-shadow">
          Help!
          <span v-if="error.statusCode">A <strong>{{ error.statusCode }}</strong> Error Occured!</span>
          <span v-else>An Error Occurred!</span>
        </h1>
        <h4 class="m-4 text-shadow">
          Message: "{{ error.message }}"
        </h4>
        <div>
          <NuxtLink to="/">
            <b-button variant="info" class="m-3">
              Back to homepage
            </b-button>
          </NuxtLink>
          <a target="_blank" href="https://github.com/andSubmarine/andsubmarine.github.io/issues">
            <b-button variant="warning" class="m-3">
              Report bug
            </b-button>
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ErrorPage extends Vue {
    @Prop() error!: any;

    mounted () {
      // eslint-disable-next-line no-console
      console.error(this.error)
    }
}
</script>

<style lang="scss">
.error-page {
    background-color: black;
    color: white;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.text-shadow {
    text-shadow: 2px 2px rgb(0,0,0.15);
}
</style>
