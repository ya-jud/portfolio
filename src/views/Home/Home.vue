<template>
  <Navbar :anchors="anchors"/>
  <div class="container" ref="container">
    <Greeting />
    <div ref="about_me" style="height: 100vh;">about me</div>
    <div ref="stack" style="height: 100vh;">my stack</div>
    <div ref="projects" style="height: 100vh;">project</div>
  </div>
</template>

<script setup lang="ts">

  import { ref } from 'vue'; // ref для элемента
  import Navbar from '../../components/Navbar.vue';
  import Greeting from './Greeting.vue';

  const about_me = ref(null); // инициализация ref элемента
  const stack = ref(null);
  const projects = ref(null);
  const anchors = [about_me, stack, projects];

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
    z-index: 1
    // scroll-snap-type: y mandatory
    div
      @extend %align-center
      // scroll-snap-align: start
      color: white
      font-size: 40px
      text-transform: uppercase
      border-top: 2px solid #fff
</style>