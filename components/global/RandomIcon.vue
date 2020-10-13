<template>
  <font-awesome-icon v-if="fontawesome"
  :icon="[type, icon]"
  > 
  </font-awesome-icon>
  <span v-else>{{icon}}</span>
</template>

<script lang="ts">
import {Prop,Component, Vue} from 'nuxt-property-decorator'
import {randomInt} from '@/scripts/Random';

@Component
export default class RandomIcon extends Vue {
    @Prop({default: false}) brand!: boolean;
    @Prop({default: false}) fontawesome!: boolean;
    @Prop() icons!: Array<string>;

    get type() {
        return (this.brand) ? "fab" : "fas";
    }

    get icon() {
        const idx = randomInt(0, this.icons.length);
        return this.icons[idx];
    }
}
</script>

<style lang="scss">

</style>