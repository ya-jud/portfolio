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
  // .my_background:before
  //   content: ""
  //   position: absolute
  //   width: 120px
  //   height: 120px
  //   left: 20%
  //   top: 10%
  //   animation: 5s rotate infinite linear
  // .my_background:after
  //   content: ""
  //   position: absolute
  //   width: 200px
  //   height: 200px
  //   top: 50%
  //   right: 20%
  //   animation: 4s rotate infinite linear
  // @keyframes rotate
  //   0%
  //     background: #87cefa
  //     filter: blur(25px)
  //     border-radius: 50%
  //   50%
  //     background: #ffb6c1
  //     filter: blur(30px)
  //     border-radius: 0%
  //   100%
  //     background: #87cefa
  //     filter: blur(25px)
  //     border-radius: 50%
  //     transform: rotate(360deg)
</style>