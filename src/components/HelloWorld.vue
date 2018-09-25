<template>
  <div class="hello">
    <base-menu></base-menu>
    <div class="image-holder">
      <div class="img-col"></div>
      <div class="img-col"></div>
      <div class="img-col"></div>
    </div>
    <div class="spacer"></div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import Menu from './shared/Menu.vue'
import Footer from './shared/Footer.vue'

export default {
  data () {
    return {
      
    }
  },
  components: {
    'BaseMenu': Menu,
    'BaseFooter': Footer
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/_mixins.sass'

.spacer
  background: rgba(black, .2)
  height: 500px

.image-holder
  background: #191919
  height: 45vw
  min-height: 280px
  max-height: 350px
  color: white
  overflow: hidden
  text-align: center

.img-col
  display: inline-block
  box-sizing: border-box
  width: 29%
  min-width: 270px
  margin: 0 2%
  margin-bottom: 10%
  height: 80%
  background: coral
  position: relative
  transform: translateY(-50%)
  top: 50%

@media (max-width: 890px)
  .img-col
    width: 45%

</style>
