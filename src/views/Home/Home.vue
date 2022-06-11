<template>
  <Navbar :anchors="anchors"/>
  <div class="container">
    <div class="greetings"></div>
    <div ref="about_me">About me</div>
    <div ref="my_stack">my stack</div>
    <div ref="my_projects">my projects</div>
  </div>
</template>

<script setup lang="ts">
  import Navbar from '../../components/Navbar.vue';
  const anchors = ['about_me', 'my_stack', 'my_projects']
</script>

<style lang="sass" scoped>
  %align-center
    display: flex
    justify-content: center
    align-items: center
  .container
    position: relative
    width: 100%
    height: 100vh
    overflow: auto
    background-color: #ddd // #222 dark theme
    z-index: 1
    .greetings
      @extend %align-center
      background: linear-gradient(-45deg, #23a6d5, #23d5ab)
    div
      width: 100%
      height: 100%
</style>