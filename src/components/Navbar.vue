<template>
  <div class="navbar">
    <div @click="scroll_to(props.anchors[0])">
      <span>about me</span>
    </div>
    <div @click="scroll_to(props.anchors[1])">
      <span>my stack</span>
    </div>
    <div @click="scroll_to(props.anchors[2])">
      <span>my projects</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const props = defineProps({
    anchors: {
      type: Array,
      default: []
    }
  });
  const scroll_to = anchor => {
    console.log(anchor);
    const root = ref(null);
    // @ts-ignore
    let element = root.value[anchor];
    let goTo = element.offsetTop;
    window.scrollTo(0, goTo);
  };
</script>

<style lang="sass" scoped>
  .navbar
    position: absolute
    font-family: Raleway
    right: 0
    color: #fff
    display: flex
    z-index: 100
    div
      text-transform: uppercase
      user-select: none
      cursor: pointer
      width: auto
      padding: 20px
      margin: 0 20px
      display: flex
      align-items: center
      span
        transition-duration: .1s
    div:hover
      font-size: 20px
</style>