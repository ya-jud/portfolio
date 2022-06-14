<template>
  <div class="navbar">
    <div @click="scroll_to(0)">
      <span>about me</span>
    </div>
    <div @click="scroll_to(1)">
      <span>my stack</span>
    </div>
    <div @click="scroll_to(2)">
      <span>my projects</span>
    </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    anchors: null
  });

  const scroll_to = anchor => {
    props.anchors[anchor].value.scrollIntoView()
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
      width: 140px
      height: 20px
      padding: 20px
      margin: 0 20px
      display: flex
      align-items: center
      span
        transition-duration: .1s
    div:hover
      font-size: 20px
</style>