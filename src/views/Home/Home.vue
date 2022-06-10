<template>
  <!-- <Navbar /> -->
  <div class="container">
    <div class="greetings">
      <span>Hello World</span>
    </div>
    <!-- <div>About me</div>
    <div>my stack</div>
    <div>my project</div> -->
  </div>
</template>

<script setup lang="ts">
  import Navbar from '../../components/Navbar.vue';
</script>

<style lang="sass" scoped>
  %align-center
    display: flex
    justify-content: center
    align-items: center
  .container
    width: 100%
    height: 100vh
    background-color: #ddd // #222 dark theme
  .greetings
    @extend %align-center
    width: 100%
    height: 100%
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)
    background-size: 400% 400%
    animation: gradient 10s ease infinite
    font-family: Raleway
    font-size: 50px
    span
      @extend %align-center
      z-index: 20
    span:before
      content: ""
      position: absolute
      width: 500px
      height: 500px
      border: 5px solid #fff
      z-index: 10
      filter: blur(5px)
  @keyframes gradient
    0%
      background-position: 0% 50%
      color: #fff
    50%
      background-position: 100% 50%
      color: #f5f58a
    100%
      background-position: 0% 50%
      color: #fff
</style>