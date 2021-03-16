<template>
  <div class="checkout">
    <div class="row">
      <div class="checkout__personal__data pad">
        <h1 ref="title">Facturación electrónica</h1>

        <!-- <form ref="form" action="https://checkout.wompi.co/p/" method="GET"> -->
        <form ref="form" action="https://checkout.wompi.co/p/" method="GET">
          <!-- OBLIGATORIOS -->
          <input
            type="hidden"
            name="public-key"
            value="pub_test_voqe1Abp9bkU25uQw317JRB38JsZWZM6"
          />
          <input type="hidden" name="currency" value="COP" />
          <input type="hidden" name="amount-in-cents" :value="totalPriceInCents" />
          <input type="hidden" name="reference" :value="reference" />
          <!-- OPCIONALES -->
          <input
            type="hidden"
            name="redirect-url"
            value="https://thechemicalsciencecompany.com/transaction-state"
          />
        </form>
        <LoadingAnimation v-show="isCreatingOrder" />
        <div class="frow">
          <input-base
            :label="'Nombre'"
            class="input--medium"
            :class="{ error: $v.name.$error }"
            v-model.trim="$v.name.$model"
          ></input-base>
          <input-base
            :label="'Apellido'"
            class="input--medium"
            :class="{ error: $v.lastName.$error }"
            v-model="$v.lastName.$model"
          ></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Tipo de Documento"
            class="input-base input--small"
            :class="{ error: $v.idType.$error }"
            v-model="$v.idType.$model"
            :options="idTypeOptions"
          ></custom-selector>
          <input-base
            :label="idType === 'NIT' ? 'NIT' : 'Número de documento'"
            class="input--medium"
            :class="{ error: $v.idNumber.$error }"
            v-model="$v.idNumber.$model"
          ></input-base>
        </div>

        <div class="frow">
          <input-base
            :label="'Correo electrónico'"
            class="input--medium"
            :class="{ error: $v.email.$error }"
            v-model="$v.email.$model"
          ></input-base>
          <input-base
            :label="'Teléfono'"
            class="input--medium"
            :class="{ error: $v.phone.$error }"
            v-model="$v.phone.$model"
          ></input-base>
          <input-base
            :label="'Dirección'"
            class="input--medium"
            :class="{ error: $v.address.$error }"
            v-model="$v.address.$model"
          ></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Estado"
            class="input-base input--medium"
            :class="{ error: $v.state.$error }"
            v-model="$v.state.$model"
            :options="stateOptions"
          ></custom-selector>

          <custom-selector
            label="Ciudad"
            class="input-base input--medium"
            :class="{ error: $v.city.$error }"
            v-model="$v.city.$model"
            :options="cityOptions"
          ></custom-selector>
        </div>
      </div>

      <div class="checkout__bill_info fix__products">
        <h2 style="padding-left: 30px;">Orden de compra</h2>
        <cart :details="true" :createOrder="createOrder"></cart>
      </div>
      <!-- <button @click="getUserIdFromJWT">Decodificar</button> -->
    </div>
    <modal-info useSlot autoSize ref="modal" :duration="5000">
      <div class="modal__message">
        <div class="title__menu">{{ this.modalText }}</div>
      </div>
    </modal-info>
    <Loading v-show="isLoading" />
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';

import Loading from '@views/Loading.vue';
import Cart from '../components/shared/Cart.vue';
import InputBase from '../components/InputBase.vue';
import util from '../util/index';
import { ID_TYPES } from '../idTypes';
import { STATES } from '../colombia';

const MAX_VALUE_PER_TRANSACTION = 10000000;

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
      reference: '',
      totalPriceInCents: 0,
      isCreatingOrder: false,
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
    this.idTypeOptions = util.pairLabelValue(ID_TYPES.map((idType) => idType.type));
    this.stateOptions = util.pairLabelValue(STATES.map((state) => state.departamento));

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
        })
        .catch((error) => {
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
    LoadingAnimation: Loading,
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
            'x-auth-token': localStorage.getItem('jwt'),
          },
        });
        return data;
      } catch (error) {
        throw 'Error in getUserData';
      }
    },
    // This method creates the order, waits the reference and save it in state
    async createOrder(termsAndConditions) {
      this.isLoading = true;
      if (!termsAndConditions) {
        this.modalText = 'No se han aceptado los terminos y condiciones';
        this.$refs.modal.triggerModal();
        return false;
      }
      const order = this.getOrderObject();

      if (order.totalPrice > MAX_VALUE_PER_TRANSACTION) {
        this.isLoading = false;
        const limitMoneyFormat = util.toMoney(MAX_VALUE_PER_TRANSACTION);
        this.modalText = `La orden excede el límite máximo de ${limitMoneyFormat} COP.`;
        this.$refs.modal.triggerModal();
        return false;
      }
      this.$v.$touch();
      if (this.$v.$anyError) {
        this.isLoading = false;
        this.modalText = 'Uno o más campos en la factura no son válidos';
        this.$refs.modal.triggerModal();
        return false;
      }
      this.isCreatingOrder = true;
      try {
        const { data } = await this.$http.post('/api/order/createOrder', order);
        const { createdOrder } = data;
        this.totalPriceInCents = order.totalPrice * 100;
        this.reference = createdOrder._id;
        this.modalText = 'Redirigiendo a la plataforma de pago';
        this.$refs.modal.triggerModal();

        setTimeout(() => {
          this.isLoading = false;
          this.$refs.form.submit();
          this.$store.commit('resetCart');
          this.$router.push({
            name: 'Catalog',
          });
        }, 1500);
      } catch (error) {
        if (error.response.status === 406) {
          this.isLoading = false;
          const limitMoneyFormat = util.toMoney(MAX_VALUE_PER_TRANSACTION);
          this.modalText = `La orden excede el límite máximo de ${limitMoneyFormat} COP.`;
          this.$refs.modal.triggerModal();
        } else if (error.response.status === 409) {
          this.isLoading = false;
          this.modalText = 'No podemos procesar tu compra hoy, contáctanos o inténtalo de nuevo mañana.';
          this.$refs.modal.triggerModal();
        } else {
          this.isLoading = false;
          this.modalText = 'Algo salió mal. Intenta nuevamente';
          this.$refs.modal.triggerModal();
        }
      }
      this.isCreatingOrder = false;
      return undefined;
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
    getOrderObject() {
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

      return order;
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

.checkout__personal__data
  flex-grow: 4

.checkout__bill_info
  flex-grow: 1

.fix__products
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

@media (max-width: 800px)
  .row
    flex-direction: column;

  .checkout__personal__data
    flex-grow: 1
</style>
