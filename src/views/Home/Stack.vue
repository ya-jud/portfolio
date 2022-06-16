<template>
  <div class="stack">Stack</div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
  %align-center
    display: flex
    justify-content: center
    align-items: center
  .stack
    @extend %align-center
    height: 100%
    font-size: 50px
    color: white
</style>