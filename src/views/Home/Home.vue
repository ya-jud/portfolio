<template>
  <Navbar :anchors="anchors"/>
  <div class="container">
    <Greeting />
    <About ref="about"/>
    <Stack ref="stack"/>
    <Projects ref="projects"/>
  </div>
</template>

<script setup lang="ts">

  import { ref } from 'vue'; // ref для элемента

  import Navbar from '../../components/Navbar.vue';
  import Greeting from './Greeting.vue';
  import About from './About.vue';
  import Stack from './Stack.vue';
  import Projects from './Projects.vue';

  const about = ref(null); // инициализация ref элемента
  const stack = ref(null);
  const projects = ref(null);
  const anchors = [about, stack, projects];

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
    scroll-snap-type: y mandatory
    div
      @extend %align-center
      scroll-snap-align: start
      color: white
      font-size: 40px
      text-transform: uppercase
</style>