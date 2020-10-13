<template>
  <Nuxt />
</template>

<style lang="scss">
body {
  background-color:#D95F5F;
  min-height: 100%;
}
.landing-pages {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
body::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #d3d3d3;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 0.2rem;
}
 
body::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    border-radius: 0.2rem;
    background-color: #5a5a5a;
}
</style>