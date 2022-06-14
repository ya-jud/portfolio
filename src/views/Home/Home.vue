<template>
  <Navbar :anchors="anchors"/>
  <div class="container">
    <Greetings />
    <div ref="about_me">About me</div>
    <div ref="stack">my stack</div>
    <div ref="projects">my projects</div>
  </div>
</template>

<script setup lang="ts">

  import { ref } from 'vue'; // ref для элемента
  import Navbar from '../../components/Navbar.vue';
  import Greetings from './Greetings.vue';

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
</style>