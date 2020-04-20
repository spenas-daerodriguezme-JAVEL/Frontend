<template>
  <div class="checkout">
    <div class="row">
      <div class="w-70 pad">
        <h1 ref="title">Facturación electrónica</h1>

        <div class="frow">
          <input-base
            :label="'Nombre'"
            class="input--medium"
            v-model="name"></input-base>
          <input-base
            :label="'Apellido'"
            class="input--medium"
            v-model="lastName"></input-base>
                  <input-base
            :label="'Cédula o NIT'"
            class="input--medium"
            v-model="email"></input-base>
        </div>

        <div class="frow">
          <input-base
            :label="'Correo electrónico'"
            class="input--medium"
            v-model="email"></input-base>
          <input-base
            :label="'Dirección'"
            class="input--medium"
            v-model="address"></input-base>
        </div>
        

        <div class="frow">
          <input-base
            :label="'Ciudad'"
            class="input--small"
            v-model="city"></input-base>
          <input-base
            :label="'Estado'"
            class="input--small"
            v-model="state"></input-base>
          <input-base
            :label="'País'"
            class="input--small"
            v-model="country"></input-base>
        </div>

      </div>

      <div class="w-30 fix__products">
        <h2 style="padding-left: 30px">Orden de compra</h2>
        <cart
          :details="true"></cart>
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
      name: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      country: '',
    }
  },
  mounted() {
    let title = this.$refs.title;
    console.log(this.$refs);

    TweenMax.from(title, 1.5, {
      x: 100,
      opacity: 0
    });
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
  position: fixed
  right: 0
  background: #0d0d0d
  color: white

.pad
  padding: 30px

.frow
  +flex(0, 0)
  width: 100%
  flex-wrap: wrap

.title
  font-size: 24px
  @extend %title

.input--medium
  margin: 2%
  flex: 1 0 220px

.input--small
  margin: 2%
  flex: 1 0 160px

</style>
