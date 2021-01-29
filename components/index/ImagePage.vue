<template>
  <b-row id="top" class="landing-pages" align-v="stretch">
    <b-col>
      <b-button-group id="learn-more">
        <b-button class="b-learn-more b-green" @click="handleClick(firstCoords)">
          Who is this guy?
        </b-button>
        <b-button class="b-learn-more b-black" @click="handleClick(secondCoords)">
          What has he done?
        </b-button>
      </b-button-group>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Coords, coords, scrollToElement } from '@/scripts/Coords'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ImagePage extends Vue {
  @Prop() firstId!: string;
  @Prop() secondId!: string;

  get firstCoords (): Coords { return coords(this.firstId) }

  get secondCoords (): Coords { return coords(this.secondId) }

  handleClick (coords: Coords) {
    scrollToElement(coords)
  }
}
</script>

<style lang="scss">
#top {
  background-color: #000;
  background-image: url("/blob/background-2.jpg"), url("/blob/background-2-low-res.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#learn-more {
  margin-top: 75vh;
  display: inline-block;
}

.b-learn-more {
  min-width: 80vw;
  margin: .5rem .5rem !important;
  padding: .5rem .5rem !important;
  font-size: 4vw;
}
.b-green {
  background-color: #26732B;
  &:hover {
    background-color:  #349e3b;
  }
}
.b-black {
  background-color: #0D0D0D;
  &:hover {
    background-color:  #353535;
  }
}

@media (min-width: 576px) {
  #learn-more {
    margin-top: 80vh;
    display: inline-flex;
  }
  .b-learn-more {
    min-width: 30vw;
    font-size: 3.5vw;
  }
}

// @media (min-width: 768px) {}
@media (min-width: 992px) {
  .b-learn-more {
    font-size: 3vw;
  }
}
@media (min-width: 1200px) {
  .b-learn-more {
    font-size: 2vw;
  }
}
// @media (min-width: 1400px) {}
</style>
