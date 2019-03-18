<template>
  <div class="loading">
    <div class="title">Agua de Javel</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
@import "../../stylesheets/global.sass"

.loading
  width: 100vw
  height: 100vh
  z-index: 100
  background: #af9e7e
  position: fixed
  top: 0
  left: 0

.title
  @extend %title
  font-size: 48px
  color: white
  

</style>

