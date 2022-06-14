<template>
  <div class="my_background"></div>
  <router-view />
</template>

<script setup lang="ts">

</script>

<style lang="sass">
  @font-face
    font-family: Raleway
    src: url('./fonts/Raleway/Raleway-VariableFont_wght.ttf')
  @font-face
    font-family: 'Press Start 2P'
    src: url('./fonts/Press_Start_2P/PressStart2P-Regular.ttf')
  *
    font-family: Raleway
  .my_background
    position: fixed
    width: 100%
    height: 100%
    background: radial-gradient(#191970, #483d8b)
  .my_background:before
    content: ""
    position: absolute
    background: #b0c4de
    border-radius: 50%
    width: 100px
    height: 100px
    left: 150px
    bottom: 300px
    filter: blur(10px)
  .my_background:after
    content: ""
    position: absolute
    border-radius: 50%
    width: 200px
    height: 200px
    animation: 3s rotate infinite
  @keyframes rotate
    0%
      background: #87cefa
      filter: blur(25px)
      top: 20px
      right: 20px
    20%
      top: 100px
      right: 100px
    50%
      background: #b0c4de
      filter: blur(30px)
      top: 200px
      right: 200px
    70%
      top: 100px
      right: 100px
    100%
      background: #87cefa
      filter: blur(25px)
      top: 20px
      right: 20px
</style>