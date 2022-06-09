<template>
  <div class="navbar">
    <div>about me</div>
    <div>my stack</div>
    <div>my project</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
  .navbar
    position: absolute
    height: 100px
    width: 200px
    background: gray
    font-family: 'Press Start 2P'
    color: #fff
    display: flex
    flex-direction: column
    justify-content: space-evenly
    div
      margin: 5px 0
      text-transform: uppercase
      cursor: pointer
      width: 100%
      text-align: center
</style>