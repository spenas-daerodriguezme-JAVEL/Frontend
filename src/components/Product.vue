<template>
  <div class="product" :class="{'product--large': isDouble}">

    <div
      v-if="isDouble"
      class="img-aux">
      <!-- <img :src="data.images.length != 0 ? URI + data.images[1].url : ''" alt=""> -->
      <img src="../assets/productos/QUITAOXIDO.jpg" alt="">
    </div>

    <div class="wrapper__single">
      <div class="display" ref="display">
        <!-- <img :src="data.images.length != 0 ? URI + data.images[0].url : ''" alt=""> -->
        <img src="../assets/productos/QUITAOXIDO.jpg" alt="">
        <img
          v-for="(image, index) in data.images"
          :key="index"
          v-show="activeImage == index && index != 0"
          :src="image.url ? URI + image.url : ''">
        <div class="buy__item">
          <div class="buy__item--inner"
            @click="sendToCart">Comprar</div>
        </div>
      </div>
      <div class="product__description">
        <div class="product__heading">
          <div class="product__title">{{ data.name }}
          <!-- <custom-selector
            class="selector--product"
            :value="selectedPresentation"
            :default-first="true "
            :options="presentationOptions"></custom-selector> -->
          </div>
          <div class="product__price">{{ data.price | toMoney }}</div>
        </div>
        {{ data.description.description | trimText(150) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import util from '../util/index'
import VAPI from '../http_common'
import CustomSelector from './ui/CustomSelector.vue'

const URI = process.env.URI

export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {}
    },
    isDouble: {
      type: Boolean,
      default: false,
      required: false
    },
    resize: {
      type: Boolean,
      default: false,
      required: false
    }
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
          '../../static/test_images/ld3.jpg'
        ]
      }
    }
  },
  async mounted() {
    if(!this.isDouble) {
      this.setImages();
    }
  },
  beforeMount() {
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
    ...mapMutations([
      'addToCart'
    ]),
    sendToCart() {
      let copy = util.deepCopy(this.data)
      copy.preview = this.images[0];

      this.addToCart(copy);
    },
    getBlock(limits, mouse) {
      for (let i = 0; i < limits.length; i++) {
        if( limits[i].top < mouse.clientY + window.scrollY && 
            limits[i].bottom > mouse.clientY + window.scrollY &&
            limits[i].left < mouse.clientX &&
            limits[i].right > mouse.clientX)
        {
          return i + 1;
        }
      }

      return -1;
    },
    async getImages(id) {
      for (let i = 1; i <= 3; i++) {
        const ans = await VAPI.get(`products/${id}/preview?image_id=${i}`, {responseType: 'arraybuffer'});
        if(ans.status == 200) {
          let image = Buffer.from(ans.data, 'binary').toString('base64');
          let src = `data:image/png;base64,${image}`;
          this.images.push(src);
        }
      }

      if(!this.isDouble) {
        this.setImages();
      }
    },
    setImages() {
      let display = this.$refs.display;
      let rect = display.getBoundingClientRect();

      let limits = [];
      let imgSize = this.data.images.length;
      let blockSize = rect.width / (imgSize - 1);

      for (let i = 0; i < imgSize - 1; i++) {
        limits.push({
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          left: rect.left + blockSize * i, 
          right: rect.left + blockSize * (i + 1)
        })
      }

      let self = this;
      display.onmousemove = function(e) {
        let image = self.getBlock(limits, e);
        self.activeImage = image;
      }

      display.onmouseleave = function() {
        self.activeImage = -1;
      }
    }
  },
  watch: {
    resize() {
      this.setImages();
    }
  },
  filters: {
    toMoney: util.toMoney,
    trimText: util.trimText
  },
  components: {
    CustomSelector
  }
}
</script>

<style lang="sass" scoped>
@import "../stylesheets/global.sass"

.wrapper__single
  width: 100%

.product
  +flex(1, 1)
  width: 300px
  flex-direction: column

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
    transform: translate(-50%, 0%)

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

</style>
