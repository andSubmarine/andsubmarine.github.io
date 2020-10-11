<template>
  <b-row id="top" class="landing-pages" align-v="stretch">
      <b-col>
        <b-button-group id="learn-more">
          <a href="#about">
            <b-button class="b-learn-more b-green">
              Who is this guy?
            </b-button>
          </a>
          <a href="#articles">
            <b-button class="b-learn-more b-black">
              What has he done?
            </b-button>
          </a>
        </b-button-group>
      </b-col>
    </b-row>
</template>

<script lang="ts">import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class ImagePage extends Vue {}
</script>

<style lang="scss">
#top {
  background-color: #000;
  background-image: url("/blanke-tech/background-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#learn-more {
  margin-top: 80vh;
}

.b-learn-more {
  min-width: 30vw;
  margin: .5rem .5rem;
  padding: .5rem .5rem;
  font-size: 1.5rem;
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

// @media (min-width: 576px) {}

// @media (min-width: 768px) {}

// @media (min-width: 992px) {}

// @media (min-width: 1200px) {}
// @media (min-width: 1400px) {}
</style>