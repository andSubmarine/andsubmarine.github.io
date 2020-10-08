<template>
  <b-row id="page-1" class="landing-pages" align-v="stretch">
      <b-col>
        <h1 id="buzzwords" class="align-middle">
          AGILE MINDED, FULL-STACKER, ANDROID DEV, SECURITY-ORIENTED, SCRUM FOLLOWER, SOFTWARE ARCHITECT & ENGINEER
        </h1>
        <a href="#page-3">
          <b-button id="b-buzzwords">Learn more</b-button>
        </a>
      </b-col>
    </b-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
#page-1 {
  background-color: #000;
  background-image: url("/blanke-tech/background-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#buzzwords {
  margin: 1rem 2.1rem;
  font-family: "Segoe UI";
  text-shadow: 1px 1px black;
  color: #F2EEEB;
  letter-spacing: 5px;
  font-size: 2.2rem;
  line-height: 1.8;
  height: 85vh;
}

#b-buzzwords {
  background-color: #26732B;
  min-width: 80%;
  padding: .5rem .5rem;
  font-size: 1.5rem;
}

@media (min-width: 576px) { 
  #buzzwords {
    font-size: 2.3rem;
    line-height: 1.7;
    height: 75vh;
  }
}

@media (min-width: 768px) { 
  #buzzwords {
    margin: 3rem 4rem;
    line-height: 2;
    font-size: 3.3rem;
    height: 80vh;
  }
  #b-buzzwords {
    padding: .8rem .8rem;
    font-size: 1.8rem;
  }
}

@media (min-width: 992px) {
  #buzzwords {
    height: 75vh;
    font-size: 3.4rem;
  }
}

@media (min-width: 1200px) {
  #buzzwords {
    margin: 3rem 10rem;
    font-size: 4rem;
    line-height: 1.5;
  }
}
@media (min-width: 1400px) {
  #buzzwords {
    font-size: 4.5rem;
  }
}
</style>