<template>
    <div class="catalog">
        <div class="title">BIENVENIDOS AL FUTURO</div>
        <div class="filter-container">
            <div class="filter-box">
                Línea de producto
                <CustomSelector
                    placeholder="Selecciona"
                    v-model="selected"
                    :default-first="true"
                    :options="options"
                />
            </div>
            <div class="filter-box">
                Tú pones los límites
                <b>FILTRAR</b>
                <div class="price-range">
                    <RangeSlider v-model="ranges" />
                </div>
            </div>
            <div class="filter-box" id="search-container">
                ¡Déjanos ayudarte!
                <router-link class="rt-link" :to="{ name: 'Search' }">
                    <b>BUSCAR</b>
                </router-link>
            </div>
        </div>

        <pagination
            style="padding: 30px 50px;"
            v-model="currentPage"
            :pages="pages"
        >
            <LoadingAnimation v-show="isLoading" />
            <div>
                <div v-if="productList.length == 0" class="no-results">
                    No se han encontrado resultados
                </div>

                <div class="catalog-box">
                    <product-base
                        v-for="(product, index) in productInterval(1, 3)"
                        :key="index + 1"
                        :resize="resizedWindow"
                        :data="product"
                    />
                </div>

                <div class="catalog-box">
                    <product-base
                        v-for="(product, index) in productInterval(4, 4)"
                        :key="index + 2"
                        :is-double="true"
                        :resize="resizedWindow"
                        :data="product"
                    />
                </div>

                <div class="catalog-box">
                    <product-base
                        v-for="(product, index) in productInterval(5, 5)"
                        :key="index + 3"
                        :resize="resizedWindow"
                        :data="product"
                    />

                    <div class="item">
                        <div
                            class="anounce"
                            v-if="products[5] && products[5].properties !== null
                            && products[5].properties.promoTitle != ''"
                        >
                            {{ products[5].properties.promoTitle }}
                        </div>
                    </div>

                    <product-base
                        v-for="(product, index) in productInterval(6, 6)"
                        :key="index + 4"
                        :resize="resizedWindow"
                        :data="product"
                    />
                </div>

                <div class="catalog-box">
                    <product-base
                        v-for="(product, index) in productInterval(7, 7)"
                        :key="index + 5"
                        :is-double="true"
                        :resize="resizedWindow"
                        :data="product"
                    />
                </div>

                <div class="catalog-box">
                    <product-base
                        v-for="(product, index) in productInterval(8, 10)"
                        :key="index + 6"
                        :resize="resizedWindow"
                        :data="product"
                    />
                </div>
            </div>
        </pagination>
    </div>
</template>

<script>
import _ from 'lodash';
import { TweenLite } from 'gsap/all';
import Loading from '@views/Loading.vue';
import Product from '../components/Product.vue';
import Pagination from '../components/ui/Pagination.vue';
import CustomSelector from '../components/ui/CustomSelector.vue';
import util from '../util/index';
import RangeSlider from '../components/ui/RangeSlider.vue';

export default {
  data() {
    return {
      isLoading: false,
      ranges: {
        minValue: 0,
        maxValue: 300000,
      },
      pages: 0,
      resizedWindow: true,
      currentPage: 1,
      searchTerm: '',
      selected: '',
      products: [],
      options: [
        { value: 'all', label: 'Todo' },
        { value: 'price', label: 'Precio' },
        { value: 'businessLine', label: 'Línea de producto' },
      ],
    };
  },

  async beforeMount() {
    const { searchTerm } = this.$route.query;
    if (searchTerm) {
      this.searchTerm = searchTerm;
      this.isLoading = true;
      const { data } = await this.$http.get(
        `/api/product/search/${searchTerm}`,
      );
      console.log(data);
      // this.productList = data.products;
      for (let index = 0; index < data.products.length; index++) {
        this.$set(this.products, index, data.products[index]);
      }
      this.pages = data.pages;
      this.isLoading = false;
    } else {
      this.filter();
    }

    try {
      const { data } = await this.$http.get(
        '/api/product/businesslinelist',
      );
      const priceLimits = await this.$http.get(
        '/api/product/extreme-values',
      );
      // this.$set(this.ranges, 'minValue', priceLimits.data.minValue);
      // this.$set(this.ranges, 'maxValue', priceLimits.data.maxValue);

      this.options = data.businessLines.map((option) => ({
        value: option,
        label: option,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async getCatalogPage() {
      this.filter();
    },
    productInterval(start, end) {
      return this.products.slice(start - 1, end);
    },
    async filter() {
      this.isLoading = true;
      const businessLine = this.selected !== '' ? `businessline/${this.selected}` : '';
      const isPriceRangeDefault = this.ranges.minValue === 0 && this.ranges.maxValue === 300000;
      const price = isPriceRangeDefault
        ? ''
        : `price/${this.ranges.minValue}-${this.ranges.maxValue}`;

      const isMultipleSearch = price !== '' && businessLine !== '';
      const page = this.currentPage !== 1 ? `?from=${this.currentPage - 1}` : '';

      let data;

      if (this.searchTerm) {
        ({ data } = await this.$http.get(
          `/api/product/search/${this.searchTerm}${page}`,
        ));
      } else {
        ({ data } = await this.$http.get(
          `/api/product/${businessLine}${
            isMultipleSearch ? '/' : ''
          }${price}${page}`,
        ));
      }

      for (let index = 0; index < data.products.length; index++) {
        console.log(data.products[0]);
        this.$set(this.products, index, data.products[index]);
      }
      // this.productList = data.products;
      this.pages = data.pages;
      this.isLoading = false;
    },
  },
  watch: {
    currentPage(val) {
      this.getCatalogPage(val);
    },
    ranges: {
      handler: _.debounce(
        function () {
          this.searchTerm = '';
          this.filter();
        },
        800,
        {
          maxWait: 100,
        },
      ),
    },
    selected() {
      this.searchTerm = '';
      this.filter();
    },
  },
  mounted() {
    const self = this;
    window.onresize = _.debounce(() => {
      self.resizedWindow = !self.resizedWindow;
    }, 350);

    TweenLite.from('.title', 1.3, {
      opacity: 0,
      yPercent: -20,
    });
  },
  computed: {
    productList: {
      set(val) {
        this.products = val;
      },
      get() {
        return this.products;
      },
    },
  },
  components: {
    CustomSelector,
    Pagination,
    ProductBase: Product,
    RangeSlider,
    LoadingAnimation: Loading,
  },
};
</script>

<style lang="scss" scoped></style>

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
    position: relative

.price-range
    @extend %absolute-centered
    top: calc(10px + 100%)

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
            color: black

            &:after
                width: 100%

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

.no-results
    font-weight: 20px
    text-align: center

@media (max-width: 630px)
    .catalog-box
        flex-wrap: wrap

@media (max-width: 800px)
    .filter-container
        display: block

    .filter-box
        margin-top: 30px
        margin-left: auto
        margin-right: auto

    .price-slider
        height: 100% !important
        margin-top: 30px !important

    #search-container
        margin-top: 100px
</style>
