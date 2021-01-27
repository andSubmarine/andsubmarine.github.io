<template>
  <em v-if="type === 'linkedin'">
    <font-awesome-icon :icon="['fab', 'linkedin']" />
    <a target="_blank" href="https://www.linkedin.com/in/andreas-b-5a926b84">Connect with me on LinkedIn</a>
  </em>
  <em v-else-if="type === 'github'">
    <font-awesome-icon :icon="['fab', 'github']" />
    <a target="_blank" href="https://github.com/andSubmarine">See my public Github profile</a>
  </em>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SocialMedia extends Vue {
    @Prop({ required: true }) type!: string;
}
</script>

<style>

</style>
