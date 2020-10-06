<template>
  <b-row id="page-1" align-v="stretch">
      <b-col>
        <h1 id="buzzwords">
          FULL-STACK, AGILE, ANDROID, SCRUM, ARCHITECTURE, ENGINEERING, SECURITY, PROJECT MANAGEMENT & OTHER BUZZWORDS  
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
  background-color: #6072A6;
  background-image: url("/blanke-tech/background-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#buzzwords {
  margin: 1rem 1rem;
  font-family: "Segoe UI";
  font-size: 3rem;
  color: #F2EEEB;
  letter-spacing: 5px;
  line-height: 1.3;
}

#b-buzzwords {
  background-color: #26732B;
  min-width: 80%;
  padding: .5rem .5rem;
  font-size: 1.5rem;
}

@media (min-width: 768px) { 
    #buzzwords {
        margin: 3rem 10rem;
        font-size: 3.4rem;
    }
}
</style>