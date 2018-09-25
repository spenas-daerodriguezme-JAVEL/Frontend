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

html, body
  margin: 0
  padding: 0
  font-family: $body-font
  overflow-x: hidden

</style>
