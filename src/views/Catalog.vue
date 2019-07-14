<template>
  <div class="catalog">
    <div class="title">
      BIENVENIDOS
      AL FUTURO.
    </div>
    <div class="filter-container">
      <div class="filter-box">
        Mira más específico.

        <custom-selector
          v-model="selected"
          :default-first="true"
          :options="options"></custom-selector>

      </div>
      <div class="filter-box">
        Tu pones los límites.
        <b>FILTRAR.</b>
      </div>
      <div class="filter-box">
        ¡Déjanos ayudarte!
        <b>BUSCAR.</b>
      </div>
    </div>

    <pagination
      style="padding: 30px 50px"
      :current.sync="currentPage"
      :pages="pages">

      <div>
        <div class="catalog-box">
          <product-base
            v-for="(product, index) in productInterval(1, 3)"
            :key="index + 1"
            :resize="resizedWindow"
            :data="product"></product-base>
        </div>

        <div class="catalog-box">
          <product-base
            v-for="(product, index) in productInterval(4, 4)"
            :key="index + 2"
            :is-double="true"
            :resize="resizedWindow"
            :data="product"></product-base>
        </div>
        
        <div class="catalog-box">
          <product-base
            v-for="(product, index) in productInterval(5, 5)"
            :key="index + 3"
            :resize="resizedWindow"
            :data="product"></product-base>

          <div class="item">
            <div class="anounce"
              v-if="products[5] && products[5].description.promotion_title != ''">
              {{ products[5].description.promotion_title }}
            </div>
          </div>

          <product-base
            v-for="(product, index) in productInterval(6, 6)"
            :key="index + 4"
            :resize="resizedWindow"
            :data="product"></product-base>
        </div>
        
        <div class="catalog-box">
          <product-base
            v-for="(product, index) in productInterval(7, 7)"
            :key="index + 5"
            :is-double="true"
            :resize="resizedWindow"
            :data="product"></product-base>
        </div>

        <div class="catalog-box">
          <product-base
            v-for="(product, index) in productInterval(8, 10)"
            :key="index + 6"
            :resize="resizedWindow"
            :data="product"></product-base>
        </div>
      </div>

    </pagination>

  </div>
</template>

<script>
import _ from 'lodash'
import VAPI from "../http_common"
import Product from '../components/Product.vue'
import Pagination from '../components/ui/Pagination.vue'
import CustomSelector from '../components/ui/CustomSelector.vue'
import util from '../util/index'

export default {
  data() {
    return {
      pages: 0,
      resizedWindow: false,
      currentPage: 1,
      selected: '',
      products: '',
      options: util.pairLabelValue([
        'Todo',
        'Todo 1',
        'Todo 2',
        'Todo 3'
      ])
    }
  },
  async beforeMount() {
    await this.getCatalogPage(1);
  },
  methods: {
    async getCatalogPage(page) {
      try {
        const res = await VAPI.get(`/catalog/${page}`);
        console.log(res);
        this.productList = res.data.results;
        this.pages = res.data.pages;
      } catch (e) {
        console.error("Error al leer pagina del catalogo", e);        
      }
    },
    productInterval(start, end) {
      return this.products.slice(start - 1, end);
    }
  },
  watch: {
    currentPage(val) {
      this.getCatalogPage(val);
    }
  },
  mounted() {
    let self = this;
    window.onresize = _.debounce(function() {
      self.resizedWindow = !self.resizedWindow;
    }, 350)
  },
  computed: {
    productList: {
      set(val) {
        this.products = val;
      },
      get() {
        return this.products;
      }
    },
  },
  components: {
    CustomSelector,
    Pagination,
    'ProductBase': Product
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.title
  +flex(1, 1)
  text-align: center
  @extend %title
  font-size: 44px

.filter-container
  font-size: 18px
  margin: 80px 0
  +flex(1, 0)
  flex-wrap: wrap
  justify-content: space-around 
  padding: 0 30px

.filter-box
  +flex(0, 1)
  flex-direction: column
  width: 200px
  text-align: center
  
.catalog-box
  +flex(0, 0)
  justify-content: space-around
  flex-wrap: wrap 

.item
  +flex(0, 0)
  width: 300px
  margin: 15px 5px
  flex-direction: column

  img
    @extend %image-cover

  .item__image
    height: 400px
    position: relative
    overflow: hidden

    &:hover > .buy__item
      transform: translate(-50%, 0%)

  .buy__item
    background: black
    position: absolute
    bottom: 0
    left: 50%
    box-sizing: border-box
    transform: translate(-50%, 100%)
    left: 50%
    color: white
    font-weight: bold
    font-size: 18px
    cursor: pointer
    transition: .3s
    border: 1px solid white

  .buy__item--inner
    padding: 13px 18px
    position: relative
    overflow: hidden

    &:after
      content: ''
      z-index: -1
      width: 0
      height: 100%
      position: absolute
      background: white
      top: 0
      left: 0
      transition: .3s

    &:hover
      &:after
        width: 100% 
      
      color: black

.item__description
  margin-top: 20px

  .item__heading
    display: flex
    white-space: pre-line
    font-size: 18px
    font-weight: bold
    margin-bottom: 15px

  .item__title
    width: 70%

  .item__price
    width: 30%

.catalog-box2
  +flex(1, 0)
  width: 100%
  margin: 15px 0

  .item
    margin: 0
    width: 50%
    min-width: 300px

  .item__image
    height: auto

.anounce
  @extend %title
  font-size: 45px
  text-align: center
  text-transform: lowercase

  &:first-letter
    text-transform: capitalize

.my-test
  position: fixed
  left: 367px
  top: 100px
  +squared(50px)
  background: red

@media (max-width: 630px)
  .catalog-box2
    flex-wrap: wrap

</style>
