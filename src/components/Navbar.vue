<template>
  <div class="navbar">
    <div>
      <span>about me</span>
    </div>
    <div>
      <span>my stack</span>
    </div>
    <div>
      <span>my project</span>
    </div>
  </div>
</template>

<script setup lang="ts">
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
      span:hover
        font-size: 20px
</style>