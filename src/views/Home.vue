<template>
  <Navbar />
  <div class="container">
    
  </div>
</template>

<script setup lang="ts">
  import Navbar from '../components/Navbar.vue';
</script>

<style lang="sass" scoped>
  .container
    width: 100%
    height: 100vh
    background-color: #ddd // #222 dark theme
    display: flex
    justify-content: center
    align-items: center
    overflow: auto
  .content
    width: 200px
    height: 50px
    background-color: #4C5866
    display: flex
    justify-content: center
    align-items: center
    font-family: Raleway
    color: white
    font-size: 25px
</style>