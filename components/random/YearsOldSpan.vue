<template>
  <span>{{yearsOld}}</span>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class YearsOldSpan extends Vue {
    get yearsOld() {
        const birthday = new Date(1995,11,26).getTime();
        const ageDifMs = Date.now() - birthday;
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
</script>

<style lang="scss">

</style>