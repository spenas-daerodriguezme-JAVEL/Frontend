<template>
  <div class="cart">

    <div class="box" :class="{'box-general': details}">

      <div v-for="(product, index) in cartProducts"
        :key="index">
        <div class="hr hr--white"></div>
        <div class="row">
          <div class="product__general">
            <div class="product__image" style="background: coral">
              <!-- <img :src="product.preview ? product.preview : defaultImage" alt=""> -->
              <img src="../../assets/productos/JABON PARA MANOS 900 ML.jpg" alt="">
            </div>
            <div>
              <span>{{ product.name }}</span>
              <div class="buttons-row">
                <button @click="subUnit(product)" class="cartButton">
                  <svg class="svg-icon" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle data-name="layer2"
                    cx="16" cy="16" r="15" fill="none" stroke="#FFFFFF" stroke-miterlimit="10"
                    stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
                    <path data-name="layer1" fill="none" stroke="#FFFFFF" stroke-miterlimit="10"
                    stroke-width="2" d="M8 16 H24" stroke-linejoin="round" stroke-linecap="round"></path>
                  </svg>
                </button>
                <span>{{ product.quantity }}</span>
                <button @click="addUnit(product)" class="cartButton">
                  <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle data-name="layer2"
                    cx="16" cy="16" r="15" fill="none" stroke="#FFFFFF" stroke-miterlimit="10"
                    stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
                    <path data-name="layer1" fill="none" stroke="#FFFFFF" stroke-miterlimit="10"
                    stroke-width="2" d="M16 8v16m8-8H8" stroke-linejoin="round" stroke-linecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="priceRow">
            <div class="product__price text--price">{{ totalCostPerProduct(product) | toMoney }}</div>
            <button @click="removeProductFromCart(product)" class="cartButton">
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle data-name="layer2"
                cx="32.001" cy="32" r="30" transform="rotate(-45 32.001 32)" fill="none"
                stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round"
                stroke-linecap="round"></circle>
                <path data-name="layer1" fill="none" stroke="#FFFFFF" stroke-miterlimit="10"
                stroke-width="3" d="M42.999 21.001l-22 22m22 0L21 21" stroke-linejoin="round"
                stroke-linecap="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="hr hr--total hr--white"></div>

      <div class="row"
        style="margin-bottom: 30px">
        <span><b>Total</b></span>
        <span class="text--price">{{ totalCost | toMoney}}</span>
      </div>
    </div>
    <div class="row">
      <div style="max-width: fit-content">
        <input type="checkbox" name="termsAndConditions" v-model="isTermsAndConditionsAccepted">
        <label for="termsAndConditions">Al marcar este campo aceptas 
          <a href="/mision" target="_blank">los terminos y condiciones</a> y
          <a href="/contact" target="_blank"> la politica de tratamiento de datos</a>.
        </label>
      </div>
    </div>
    <div class="btn btn--white"
      style="margin-top: 10px"
      @click="createOrder"
      v-if="isTermsAndConditionsAccepted">{{ details ? 'Pagar' : 'Crear orden'}}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import util from '../../util/index';

export default {
  props: {
    details: {
      type: Boolean,
      default: false,
    },
    createOrder: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      isTermsAndConditionsAccepted: false,
    }
  },
  computed: {
    ...mapGetters([
      'cartProducts',
    ]),
    totalCost() {
      return this.$store.getters.totalCartPrice;
    },
  },
  methods: {
    ...mapMutations([
      'addProductUnit',
      'subProductUnit',
    ]),
    ...mapActions([
      'removeProductFromCart',
    ]),
    toCheckout() {
      if (!this.details) {
        this.$router.push({
          name: 'Checkout',
        });
      }
    },
    addUnit(product) {
      this.addProductUnit(product);
    },
    subUnit(product) {
      this.subProductUnit(product);
    },
    totalCostPerProduct(product) {
      return product.price * product.quantity;
    },
  },
  filters: {
    toMoney: util.toMoney,
  },
};
</script>

<style lang="sass" scoped>
@import "../../stylesheets/global.sass"

.cart
  padding: 15px 30px 0
  font-size: 17px

.box
  height: 280px
  overflow-y: auto

.box-general
  height: calc(100vh - 250px)

.hr
  width: 100%
  height: 2px
  margin: 13px auto
  background: black

.hr--total
  height: 4px

.hr--white
  background: white

.row
  +flex(1, 1)
  padding: 0 10px
  justify-content: space-between

.product__general
  +flex(0, 1)
  width: 80%

.product__image
  min-width: 50px
  width: 50px
  height: 70px
  margin-right: 25px

  img
    @extend %image-cover

.product__price
  font-weight: bold

.text--price
  font-size: 18px
  font-weight: bold

.btn--right
  width: 200px
  margin-top: auto
  margin-left: auto

.buttons-row
  display: flex
  align-items: center
  margin-top: 0.5rem

.cartButton
  background-color: Transparent
  border: none
  outline: none

  &:hover
    opacity: 0.5

.svg-icon
  width: 1.3rem
  height: 1.3rem

.priceRow
  text-align: end
  margin-top: 1rem

@media (max-width: 800px)
  .box-general
    height: auto
</style>
