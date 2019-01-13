<template>
  <div class="checkout">
    <div class="row">
      <div class="w-70 pad">
        <h1>Detalles</h1>  

        <div class="frow">
          <input-base
            :label="'Nombre'"
            class="input--medium"
            v-model="name"></input-base>
          <input-base
            :label="'Apellido'"
            class="input--medium"
            v-model="lastName"></input-base>
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
            class="input--medium"
            v-model="city"></input-base>
          <input-base
            :label="'Estado'"
            class="input--medium"
            v-model="state"></input-base>
          <input-base
            :label="'País'"
            class="input--medium"
            v-model="country"></input-base>
        </div>

      </div>  

      <div class="w-30 fix__products">
        <h2 style="padding-left: 30px">Tu orden</h2>
        <cart
          :details="true"></cart>  
      </div>  
    </div>    
  </div>
</template>

<script>
import Cart from '../components/shared/Cart.vue'
import InputBase from '../components/InputBase.vue'

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
  background:#98B9CC

.pad
  padding: 30px

.frow
  +flex(0, 0)
  width: 100%

.title
  font-size: 24px
  @extend %title

.input--medium
  width: 48%
  margin: 2%

.input--small
  width: 31.33%
  margin: 2%

</style>
