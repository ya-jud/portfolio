<template>
  <div class="greeting">Hi</div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
  %align-center
    display: flex
    justify-content: center
    align-items: center
  .greeting
    @extend %align-center
    height: 100%
    font-size: 50px
    color: white
</style>