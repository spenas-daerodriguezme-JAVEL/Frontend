<template>
  <div class="checkout">
    <div class="row">
      <div class="w-70 pad">
        <h1 ref="title">Facturación electrónica</h1>
        <!-- <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu">
          <input name="merchantId"    type="hidden"  value="508029"   >
          <input name="accountId"     type="hidden"  value="512321" >
          <input name="description"   type="hidden"  value="Test PAYU"  >
          <input name="referenceCode" type="hidden"  value="api12343412" >
          <input name="amount"        type="hidden"  value="20000"   >
          <input name="tax"           type="hidden"  value="3193"  >
          <input name="taxReturnBase" type="hidden"  value="16806" >
          <input name="currency"      type="hidden"  value="COP" >
          <input name="signature"     type="hidden"  value="ed549198f7ceecf96ff7139d27110857"  >
          <input name="test"          type="hidden"  value="1" >
          <input name="buyerEmail"    type="hidden"  value="test@test.com" >
          <input name="responseUrl"    type="hidden"  value="http://aguadejavel.com/transaction-state" >
          <input name="confirmationUrl"  type="hidden"  value="http://aguadejavel.com:3000/api/order/aja" >
          <input name="Submit"        type="submit"  value="Enviar" >
        </form> -->

        <form action="https://checkout.wompi.co/p/" method="GET">
          <!-- OBLIGATORIOS -->
          <input type="hidden" name="public-key" value="pub_test_U9aQp24LvCo0otYqsyy66sErjZN7Gd7B" />
          <input type="hidden" name="currency" value="COP" />
          <input type="hidden" name="amount-in-cents" value="495000" />
          <input type="hidden" name="reference" value="6" />
          <!-- OPCIONALES -->
          <input type="hidden" name="redirect-url" value="https://aguadejavel.com/transaction-state" />
          <button type="submit">Pagar con Wompi</button>
        </form>

        <div class="frow">
          <input-base :label="'Nombre'"
            class="input--medium" :class="{ 'error': $v.name.$error }"
            v-model.trim="$v.name.$model"
          ></input-base>
          <input-base :label="'Apellido'"
            class="input--medium" :class="{ 'error': $v.lastName.$error }"
            v-model="$v.lastName.$model"
          ></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Tipo de Documento"
            class="input-base input--small"
            :class="{ 'error': $v.idType.$error }"
            v-model="$v.idType.$model"
            :options="idTypeOptions"
          ></custom-selector>
          <input-base :label="idType === 'NIT' ? 'NIT' : 'Número de documento'"
            class="input--medium" :class="{ 'error': $v.idNumber.$error }"
            v-model="$v.idNumber.$model"
          ></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Correo electrónico'"
            class="input--medium" :class="{ 'error': $v.email.$error }"
            v-model="$v.email.$model"
          ></input-base>
          <input-base :label="'Teléfono'"
            class="input--medium" :class="{ 'error': $v.phone.$error }"
            v-model="$v.phone.$model"
          ></input-base>
          <input-base :label="'Dirección'"
            class="input--medium" :class="{ 'error': $v.address.$error }"
            v-model="$v.address.$model"
          ></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Estado"
            class="input-base input--medium"
            :class="{ 'error': $v.state.$error }"
            v-model="$v.state.$model"
            :options="stateOptions"
          ></custom-selector>

          <custom-selector
            label="Ciudad"
            class="input-base input--medium"
            :class="{ 'error': $v.city.$error }"
            v-model="$v.city.$model"
            :options="cityOptions"
          ></custom-selector>
        </div>
      </div>

      <div class="w-30 fix__products">
        <h2 style="padding-left: 30px">Orden de compra</h2>
        <cart
          :details="true"
          :createOrder="createOrder"
        ></cart>
      </div>
      <!-- <button @click="getUserIdFromJWT">Decodificar</button> -->
    </div>
    <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">{{this.modalText}}</div>
      </div>
    </modal-info>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';

import Cart from '../components/shared/Cart.vue';
import InputBase from '../components/InputBase.vue';
import util from '../util/index';
import { ID_TYPES } from '../idTypes';
import { STATES } from '../colombia';


export default {
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      idType: '',
      idNumber: '',
      idTypeOptions: [],
      phone: '',
      modalText: '',
      stateOptions: [],
    };
  },
  computed: {
    cityOptions() {
      if (this.state !== '') {
        return util.pairLabelValue(
          STATES.find((state) => state.departamento === this.state).ciudades,
        );
      }

      return [{ value: '', label: '' }];
    },
  },
  beforeMount() {
    this.idTypeOptions = util.pairLabelValue(
      ID_TYPES.map((idType) => idType.type),
    );
    this.stateOptions = util.pairLabelValue(
      STATES.map((state) => state.departamento)
    );

    const userId = this.getUserIdFromJWT();
    if (userId) {
      this.getUserData(userId)
        .then((data) => {
          this.name = data.name;
          this.lastName = data.lastName;
          this.email = data.email;
          this.idType = data.identificationType;
          this.idNumber = data.identificationNumber;
          this.phone = data.telephone;
        }).catch((error) => {
          console.error('---------- Something wrong while get user data -----------');
          console.error(error);
        });
    }
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
  methods: {
    getUserIdFromJWT() {
      const JWT = localStorage.getItem('jwt');
      if (!JWT) {
        return null;
      }
      const tokens = JWT.split('.');
      const JwtPayload = JSON.parse(atob(tokens[1]));
      return JwtPayload._id;
    },
    async getUserData(userId) {
      try {
        const { data } = await this.$http.get('/api/users/me', {
          headers: {
            id: userId,
            'x-auth': localStorage.getItem('jwt'),
          },
        });
        return data;
      } catch (error) {
        console.error(error);
        throw 'Error in getUserData';
      }
    },
    async createOrder() {
      const order = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        identificationType: this.idType,
        identificationNumber: this.idNumber,
        telephone: this.phone,
        address: this.address,
        city: this.city,
        state: this.state,
        products: this.getProductsAndQuantities(),
        totalPrice: this.$store.getters.totalCartPrice,
      };
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.modalText = 'Uno o más campos en la factura no son válidos';
        this.$refs.modal.triggerModal();
        return false;
      }
      try {
        const res = await this.$http.post('/api/order/createOrder', order);
        this.modalText = 'Orden creada exitosamente';
        this.$refs.modal.triggerModal();
        setTimeout(() => {
          this.$store.commit('resetCart');
          this.$router.push({
            name: 'Catalog',
          });
        }, 1000);
      } catch (error) {
        this.modalText = 'Algo salió mal. Intenta nuevamente';
        this.$refs.modal.triggerModal();
      }
    },
    getProductsAndQuantities() {
      const products = [];
      this.$store.getters.cartProducts.forEach((product) => {
        products.push({
          productId: product._id,
          qty: product.quantity,
        });
      });
      return products;
    },
  },
  mixins: [validationMixin],
  validations: {
    name: { required },
    lastName: { required },
    email: { required },
    address: { required },
    city: { required },
    state: { required },
    country: { required },
    idType: { required },
    idNumber: {
      required,
      minLenght: minLength(8),
    },
    phone: { required },
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
  &.error
    border: 1px solid red
    box-shadow: 0px 0px 2px red;

.input--small
  margin: 2%
  flex: 1 0 160px
  &.error
    border: 1px solid red
    box-shadow: 0px 0px 2px red;

</style>
