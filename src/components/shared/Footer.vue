<template>
  <div class="footer">
    <div class="subtitle">Lavoratorio Agua de Javel</div>
    <div class="title">Agua de Javel</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../../stylesheets/_global.sass'

.footer
  +flex(1, 1)
  flex-direction: column
  padding: 50px
  background: #121212

.title
  color: white
  font-family: $title-font
  font-size: 38px

.subtitle
  color: white
  letter-spacing: 3px
  font-size: 20px
  height: 60px


</style>
