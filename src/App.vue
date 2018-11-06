<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
@import './stylesheets/global.sass'

@font-face
  font-family: 'Avenir'
  font-weight: normal
  src: url("./assets/fonts/avenir-lt-std-cufonfonts/AvenirLTStd-Medium.otf") format("opentype")
  
@font-face
  font-family: 'Avenir'
  font-weight: light
  src: url("./assets/fonts/avenir-lt-std-cufonfonts/AvenirLTStd-Light.otf") format("opentype")
  
@font-face
  font-family: 'Avenir'
  font-weight: bold
  src: url("./assets/fonts/avenir-lt-std-cufonfonts/AvenirLTStd-Heavy.otf") format("opentype")

@font-face
  font-family: 'DIN'
  src: url("./assets/fonts/d-din/D-DIN-Bold.otf") format("opentype")

html, body
  margin: 0
  padding: 0
  font-family: $body-font
  overflow-x: hidden

</style>
