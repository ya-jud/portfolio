<template>
  <div class="app">
    <router-view />
  </div>
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
  .app
    position: fixed
    width: 100%
    height: 100%
    background: radial-gradient(#191970, #483d8b)
    font-family: Raleway
</style>