<template>
  <div class="product" :class="{ 'product--large': isDouble }" @click="showDetail(data._id)">
    <div v-if="isDouble" class="img-aux">
      <!-- <img :src="data.images.length != 0 ? URI + data.images[1].url : ''" alt=""> -->
      <img :src="product.images[1]" />
    </div>

    <div class="wrapper__single">
      <div class="display" ref="display">
        <!-- <img :src="data.images.length != 0 ? URI + data.images[0].url : ''" alt=""> -->
        <img :src="product.images[0]" />
        <img
          v-for="(image, index) in product.images"
          :key="index"
          v-show="activeImage == index && index != 0"
          :src="image ? image : ''"
        />
        <div class="buy__item" :class="{ 'buy__item--disable': product.quantity === 0 }">
          <div class="buy__item--inner" @click.stop="sendToCart">
            {{ product.quantity === 0 ? 'Agotado' : 'Comprar' }}
          </div>
        </div>
      </div>
      <div class="product__description">
        <div class="product__heading">
          <div class="product__title">
            <div>
              {{ product.name }}
            </div>
          </div>
          <div class="product__price">{{ product.price | toMoney }}</div>
        </div>
        <div><b>Capacidad:</b> {{ product.capacity }}</div>
        {{ product.properties.description | trimText(100) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import util from '../util/index';
import VAPI from '../http_common';
import CustomSelector from './ui/CustomSelector.vue';

const { URI } = process.env;

export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {},
    },
    isDouble: {
      type: Boolean,
      default: false,
      required: false,
    },
    resize: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      URI,
      presentationOptions: [],
      selectedPresentation: '',
      selectedVersion: 0,
      activeImage: 0,
      images: [],
      product: {
        title: 'QUITA MANCHAS GRANULADO',
        price: 6000,
        size: '200 gr',
        images: [
          '../../static/test_images/ld1.jpg',
          '../../static/test_images/ld2.jpg',
          '../../static/test_images/ld3.jpg',
        ],
      },
    };
  },
  async mounted() {
    if (!this.isDouble) {
      this.setImages();
    }
  },
  beforeMount() {
    this.setInitialProperties();
    this.putImages();
    // this.presentationOptions = this.data.price.map(
    //   function(o, index) {
    //     return {
    //       label: o.dimention,
    //       value: index
    //     }
    //   }
    // );
  },
  methods: {
    ...mapMutations(['addToCart']),
    sendToCart() {
      if (this.product.quantity === 0) {
        return;
      }
      const copy = util.deepCopy(this.data);
      copy.preview = util.getImageFromProduct(this.data.properties.images, 1);
      this.addToCart(copy);
    },
    getBlock(limits, mouse) {
      for (let i = 0; i < limits.length; i++) {
        if (
          limits[i].top < mouse.clientY + window.scrollY
          && limits[i].bottom > mouse.clientY + window.scrollY
          && limits[i].left < mouse.clientX
          && limits[i].right > mouse.clientX
        ) {
          return i + 1;
        }
      }

      return -1;
    },
    setInitialProperties() {
      this.product = this.data;
      if (this.product.properties === null) {
        this.product.properties = {};
        this.product.properties.description = '';
        this.product.images = [
          '../../static/test_images/ld1.jpg',
          '../../static/test_images/ld2.jpg',
          '../../static/test_images/ld3.jpg',
        ];
      } else {
        this.product.images = [
          util.getImageFromProduct(this.product.properties.images, 0),
          util.getImageFromProduct(this.product.properties.images, 1),
        ];
      }
    },

    setImages() {
      const { display } = this.$refs;
      const rect = display.getBoundingClientRect();

      const limits = [];
      const imgSize = this.product.images.length;
      const blockSize = rect.width / (imgSize - 1);

      for (let i = 0; i < imgSize - 1; i++) {
        limits.push({
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          left: rect.left + blockSize * i,
          right: rect.left + blockSize * (i + 1),
        });
      }
      const self = this;
      display.onmousemove = function (e) {
        const image = self.getBlock(limits, e);
        self.activeImage = image;
      };

      display.onmouseleave = function () {
        self.activeImage = -1;
      };
    },
    putImages() {
      const thumbnailImages = [];
      if (this.data && this.data.properties) {
        this.data.properties.images.forEach((image) => {
          const imageName = image.split('/')[4];
          if (imageName.includes('thumbnail')) {
            thumbnailImages.push(image);
          }
        });
        for (let index = 0; index < thumbnailImages.length; index++) {
          this.product.images.splice(index, 1, thumbnailImages[index]);
        }
      }
    },
    showDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    },
  },
  watch: {
    resize() {
      this.setImages();
    },
    data() {
      this.setInitialProperties();
      this.putImages();
    },
  },
  filters: {
    toMoney: util.toMoney,
    trimText: util.trimText,
  },
  components: {
    CustomSelector,
  },
};
</script>

<style lang="sass" scoped>
@import "../stylesheets/global.sass"

.wrapper__single
    width: 100%

.product
    +flex(1, 1)
    width: 300px
    flex-direction: column
    cursor: pointer

.product--large
    width: 100%
    flex-direction: row
    align-items: flex-start

    > *
        width: 50%

    .img-aux
        height: 400px

        img
            @extend %image-cover

.display
    width: 100%
    height: 400px
    position: relative
    overflow: hidden

    img
        position: absolute
        @extend %image-cover
        animation: 400ms fadeIn ease-out forwards

    &:hover > .buy__item
        transform: translate(-50%, 0%) !important

.product__heading
    +flex(0, 0)
    @extend %title
    font-size: 18px
    margin-bottom: 10px

.product__title
    width: 70%
    white-space: pre-line
    text-transform: uppercase

.product__price
    width: 30%

.product__description
    margin-top: 20px
    margin-bottom: 1em
    width: 100%
    height: 170px

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

.buy__item--disable
    background: gray

    .buy__item--inner
      cursor: not-allowed

      &:after
        background: gray

      &:hover
        color: white

.selector--product
    font-size: 16px
    padding-bottom: 23px
    border: 1.5px solid rgba(black, 0.2)
    text-transform: none

@keyframes fadeIn
    from
      left: 100%

    to
      left: 0

@media (max-width: 800px)
  .buy__item
    margin-bottom: 50px

  .buy__item--inner
    transition: all .1s ease-in-out

    &:active
      transform: scale(1.1)
      background-color: white
      color: black
      transition: .1s

  .product--large
    flex-wrap: wrap

    > *
      width: 100%

    .img-aux
      min-width: 100%
</style>
