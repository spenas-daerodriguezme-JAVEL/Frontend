<template>
  <div class="checkout">
    <div class="row">
     <div class="w-30 fix__products center--responsive"
      style="padding: 30px" ref="column">
        <h1 ref="title1" class="title--responsive">Ayuda</h1>  
      </div>  

      <div class="w-70 pad" ref="column2">
        <h1 ref="title2">¿Olvidaste tu contraseña?</h1>  

        <div class="frow">
          <input-base
            :label="'Dirección de correo'"
            class="input--large"
            v-model="account.email"></input-base>
        </div>

        <div class="frow help__container">
          <div class="help__info">
            ¿Olvidaste tu contraseña? Por favor ingresa tu correo electrónico.
            Recibirás un enlace para crear una nueva contraseña mediante tu correo.
          </div>
          <div class="btn"
            style="max-width: 200px; margin-left: 20px">Reiniciar contraseña</div>
        </div>
      </div>  
    </div>    
  </div>
</template>

<script>
import Cart from '../components/shared/Cart.vue'
import InputBase from '../components/InputBase.vue'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
  data() {
    return {
      account: {
        email: '',
      }
    }
  },
  mounted() {
    let title = this.$refs.title1;
    let welcome = this.$refs.title2;
    console.log(this.$refs);
    
    TweenMax

    let tl = new TimelineLite();

    tl
      .from(title, 1.5, {
        x: 100,
        opacity: 0
      })
      .delay(0.1)
      .from(welcome, 0.5, {
        y: 90,
        opacity: 0
      });


    let column = this.$refs.column;
    let column2 = this.$refs.column2;
    let bounds = column.getBoundingClientRect();

    Object.assign([column.style, column2.style], {
      'height': `calc(100vh - ${bounds.top}px)`
    })

  },
  components: {
    InputBase,
    Cart
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

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
  background:#B0B2A1

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
