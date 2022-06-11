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
    height: 100%
    margin-left: 50px
    font-family: Raleway
    color: #fff
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 100
    div
      text-transform: uppercase
      user-select: none
      cursor: pointer
      width: 100%
      height: 20px
      margin: 20px 0
      padding: 10px
      display: flex
      align-items: center
      span
        transition-duration: .1s
    div:hover
      font-size: 20px
</style>