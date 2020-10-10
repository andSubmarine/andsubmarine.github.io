<template>
  <b-row id="top" class="landing-pages" align-v="stretch">
      <b-col>
        <a href="#about">
          <b-button id="learn-more">
            <b-icon-arrow-down-short></b-icon-arrow-down-short>
            Who is this guy?
            <b-icon-arrow-down-short></b-icon-arrow-down-short>
          </b-button>
        </a>
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
  background-color: #26732B;
  min-width: 50vw;
  padding: .5rem 0;
  font-size: 1.5rem;
}

// @media (min-width: 576px) {}

// @media (min-width: 768px) {}

// @media (min-width: 992px) {}

// @media (min-width: 1200px) {}
// @media (min-width: 1400px) {}
</style>