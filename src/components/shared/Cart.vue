<template>
  <div class="cart">
    
    <div class="box" :class="{'box-general': details}">

      <div v-for="(product, index) in cartProducts"
        :key="index">
        <div class="hr"></div>
        <div class="row">
          <div class="product__general">
            <div class="product__image" style="background: coral">
              <img :src="product.preview" alt="">
            </div>
            <span>{{ product.name}}</span>
          </div>
          <div class="product__price text--price">{{ product.price[0].price | toMoney }}</div>
        </div>
      </div>

      <div class="hr hr--total"></div>

      <div class="row"
        style="margin-bottom: 30px">
        <span><b>Total</b></span>
        <span class="text--price">{{ totalCost | toMoney}}</span>
      </div>
    </div>

    <div class="btn btn--right"
      style="margin-top: 10px"
      @click="toCheckout">{{ details ? 'Comprar' : 'Crear orden'}}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import util from '../../util/index'

export default {
  props: {
    details: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      products: []
    }
  },
  computed: {
    ...mapGetters([
      'cartProducts'
    ]),
    totalCost() {
      let cost = 0;

      for(const product of this.cartProducts) {
        cost += parseFloat(product.price[0].price)
      }

      return cost;
    }
  },
  methods: {
    toCheckout() {
      if(!this.details) {
        this.$router.push({
          name: 'Checkout'
        })
      }
    }
  },
  filters: {
    toMoney: util.toMoney
  }
}
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
  height: calc(100vh - 350px)

.hr
  width: 100%
  height: 2px
  margin: 13px auto
  background: black

.hr--total
  height: 4px

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

</style>
