<template>
  <div class="checkout">
    <div class="row">
      <div class="w-70 pad">
        <h1 ref="title">Facturación electrónica</h1>

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
          <input-base label="Número de documento" class="input--medium" v-model="idNumber"></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Correo electrónico'" class="input--medium" v-model="email"></input-base>
          <input-base :label="'Teléfono'" class="input--medium" v-model="phone"></input-base>
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
        <cart
          :details="true"
          :createOrder="createOrder"
        ></cart>
      </div>
      <!-- <button @click="getUserIdFromJWT">Decodificar</button> -->
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
      idNumber: '',
      idTypeOptions: [],
      phone: '',
    };
  },
  beforeMount() {
    this.idTypeOptions = util.pairLabelValue(
      ID_TYPES.map((idType) => idType.type)
    );
    const userId = this.getUserIdFromJWT();
    if (!userId) {
      return null;
    }
    try {
      this.getUserData(userId);
    } catch (error) {
      console.error(error);
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
          params: {
            _id: userId
          }
        });
        return data;
      } catch (error) {
        console.error(error);
        throw "Error in getUserData"
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
      console.log('--------- order --------');
      console.log(order);
      try {
        const res = await this.$http.post('/api/order/createOrder', order);
      } catch (error) {
        console.error(error);
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
    }
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
