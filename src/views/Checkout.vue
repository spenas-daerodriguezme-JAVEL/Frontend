<template>
  <div class="checkout">
    <div class="row">
      <div class="w-70 pad">
        <h1 ref="title">Facturación electrónica</h1>
<form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu">
  <input name="merchantId"    type="hidden"  value="508029"   >
  <input name="accountId"     type="hidden"  value="512321" >
  <input name="description"   type="hidden"  value="Test PAYU"  >
  <input name="referenceCode" type="hidden"  value="api123434" >
  <input name="amount"        type="hidden"  value="20000"   >
  <input name="tax"           type="hidden"  value="3193"  >
  <input name="taxReturnBase" type="hidden"  value="16806" >
  <input name="currency"      type="hidden"  value="COP" >
  <input name="signature"     type="hidden"  value="5636c5a0315d39bc58aab80293f9c506"  >
  <input name="test"          type="hidden"  value="1" >
  <input name="buyerEmail"    type="hidden"  value="test@test.com" >
  <input name="responseUrl"    type="hidden"  value="http://aguadejavel.com/transaction-state" >
  <input name="confirmationUrl"    type="hidden"  value="http://aguadejavel.com:3000/api/order/aja" >
  <input name="Submit"        type="submit"  value="Enviar" >
</form>
        <div class="frow">
          <input-base :label="'Nombre'" class="input--medium" v-model="name"></input-base>
          <input-base :label="'Apellido'" class="input--medium" v-model="lastName"></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Tipo de Documento"
            class="input-base input--small"
            v-model="idType"
            :options="idTypeOptions"
          ></custom-selector>
          <input-base label="Número de documento" class="input--medium" v-model="email"></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Correo electrónico'" class="input--medium" v-model="email"></input-base>
          <input-base :label="'Dirección'" class="input--medium" v-model="address"></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Ciudad'" class="input--small" v-model="city"></input-base>
          <input-base :label="'Estado'" class="input--small" v-model="state"></input-base>
          <input-base :label="'País'" class="input--small" v-model="country"></input-base>
        </div>
      </div>

      <div class="w-30 fix__products">
        <h2 style="padding-left: 30px">Orden de compra</h2>
        <cart :details="true"></cart>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import Cart from '../components/shared/Cart.vue';
import InputBase from '../components/InputBase.vue';
import util from '../util/index';
import { ID_TYPES } from '../idTypes';

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
      idType: '',
      idTypeOptions: [],
    };
  },
  beforeMount() {
    this.idTypeOptions = util.pairLabelValue(
      ID_TYPES.map((idType) => idType.type),
    );
  },
  mounted() {
    const { title } = this.$refs;
    console.log(this.$refs);

    TweenMax.from(title, 1.5, {
      x: 100,
      opacity: 0,
    });
  },
  components: {
    InputBase,
    Cart,
  },
};
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
  position: sticky
  right: 0
  background: $color-black-soft
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
