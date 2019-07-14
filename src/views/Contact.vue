<template>
  <div class="checkout">
    <div class="section">Contacto</div>
    <selector-list
      :options="options">
    
    <div slot="Cuenta">
      <b>Cuenta</b>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis porro eos delectus.

    </div>
    <div slot="Contacto">
      <b>Contacto</b>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis porro eos delectus.

    </div>

    </selector-list>
  </div>
</template>

<script>
import Cart from '../components/shared/Cart.vue'
import InputBase from '../components/InputBase.vue'
import SelectorList from '../components/ui/SelectorList.vue'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
  data() {
    return {
      options: [
        'Cuenta',
        'Contacto',
        'FAQ',
        'Envío',
        'Devoluciones',
        'Opciones de pago',
      ]
    }
  },
  mounted() {

  },
  components: {
    InputBase,
    Cart,
    SelectorList
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.section
  +flex(1, 1)
  background:#CA9E9F
  height: 30vw
  font-size: 60px
  @extend %title

h1
  font-size: 40px

.row
  +flex(0, 0)
  min-height: 100vh
  
  > *
    box-sizing: border-box 

.w-70
  width: 70%

.w-30
  width: 70%

.fix__products
  width: 30vw
  height: 100vh
  background:#CA9E9F

.pad
  padding: 30px

.center--responsive
  +flex(0, 0)

.frow
  +flex(0, 0)
  width: 100%
  flex-wrap: wrap

.title
  font-size: 24px
  @extend %title

.title--responsive
  font-size: 4vw

.input--medium
  margin: 2%
  flex: 1 0 220px

.input--small
  margin: 2%
  flex: 1 0 160px

.help__container
  display: flex
  justify-content: space-between

.help__info
  font-size: 13px
  max-width: 380px
  white-space: pre-line

@media (max-width: 820px)
  .center--responsive
    align-items: center

@media (max-width: 550px)
  .row
    flex-flow: column

  .w-30, .w-70
    height: auto
    width: 100%

</style>
