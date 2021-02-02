<template>
  <Nuxt class="default-layout" />
</template>

<style lang="scss">
body {
  min-height: 100%;
}
.default-layout {
  background-color:#D95F5F;
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