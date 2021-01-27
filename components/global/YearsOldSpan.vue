<template>
  <span>{{ yearsOld }}</span>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class YearsOldSpan extends Vue {
  @Prop({ default: new Date(1995, 11, 26).getTime() }) datetime!: number;

  get yearsOld () {
    const ageDifMs = Date.now() - this.datetime
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}
</script>
