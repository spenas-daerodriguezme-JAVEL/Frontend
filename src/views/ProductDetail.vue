<template>
  <div>
    <div v-if="isLoading">
      Cargando ...
    </div>
    <div class="product_detail" v-else>
      <div class="product__main">
        <div class="image__container">
          <img
            src="../assets/productos/QUITAOXIDO.jpg"
            alt=""
            class="image__holder"
          />

          <div class="btn-buy">
            <div class="btn-buy__item btn-buy--left">
              {{ this.product.price | toMoney }}
            </div>
            <div class="btn-buy__item btn-buy--right">Comprar</div>
          </div>
        </div>

        <div class="text__container">
          <div class="product__title">{{ this.product.name }}</div>
          <div class="product__description">
            {{ this.product.properties.description }}
          </div>
        </div>
      </div>

      <div class="product__details">
        <div class="product__feature">
          <b>Aspecto físico</b>
          {{ this.product.properties.physicalAspect }}
        </div>
        <div class="product__feature">
          <b>Olor</b>
          {{ this.product.properties.smell }}
        </div>
        <div class="product__feature">
          <b>Color</b>
          {{ this.product.properties.color }}
        </div>
        <div class="product__feature">
          <b>Fragancias</b>
          {{ this.product.properties.fragance }}
        </div>
        <div class="product__feature">
          <b>Gravedad específica</b>
          {{ this.product.properties.gravity }}
        </div>
        <div class="product__feature">
          <b>Viscosidad</b>
          {{ this.product.properties.viscosity }}
        </div>
        <div class="product__feature">
          <b>Solubilidad en agua</b>
          {{ this.product.properties.solubility }}
        </div>
        <div class="product__feature">
          <b>Infablamable</b>
          {{ this.product.properties.flammable }}
        </div>
        <div class="product__feature">
          <b>Densidad</b>
          {{ this.product.properties.density }}
        </div>
        <div class="product__feature">
          <b>PH</b>
          {{ this.product.properties.ph }}
        </div>
        <div class="product__feature">
          <b>Componente activo</b>
          {{ this.product.properties.activeComponent }}
        </div>
        <div class="product__feature">
          <b>Peso</b>
          {{ this.product.properties.weight }}
        </div>
        <div class="product__feature">
          <b>Índice de refracción</b>
          {{ this.product.properties.refractionIndex }}
        </div>
        <div class="product__feature">
          <b>Dilución</b>
          {{ this.product.properties.dilution }}
        </div>
        <div class="product__feature">
          <b>Es tóxico</b>
          {{ this.product.properties.isToxic }}
        </div>
      </div>

      <div class="gallery">
        <div class="gallery__item hlp__image-cover">
          <img src="../assets/productos/CLORO 900 ML.jpg" alt="" />
        </div>
        <div class="gallery__item hlp__image-cover">
          <img src="../assets/productos/CLORO 900 ML.jpg" alt="" />
        </div>
      </div>

      <div class="product__phrase">
        {{ this.product.properties.paragraph1 }}
      </div>

      <div class="title--center">Modo de empleo</div>
      <div class="steps__container">
        <div
          class="steps__item"
          v-for="(step, index) in product.properties.steps"
          :key="index"
        >
          <div class="step__count">{{ index + 1 }}</div>
          <div class="step__description">
            {{ step }}
          </div>
        </div>
      </div>

      <div class="gallery">
        <div class="gallery__item hlp__image-cover gallery__item--centered">
          <img src="../assets/productos/CLORO 900 ML.jpg" alt="" />
        </div>
        <div class="gallery__item hlp__image-cover gallery__item--centered">
          <img src="../assets/productos/CLORO 900 ML.jpg" alt="" />
        </div>
      </div>

      <div class="product__phrase product__phrase--detail">
        {{ this.product.properties.paragraph2 }}
      </div>

      <div class="product__phrase product__phrase--detail">
        {{ this.product.properties.paragraph3 }}
      </div>

      <div class="title--center title--third" style="margin-bottom: 100px;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <modal-info useSlot autoSize ref="modal">
        <div class="modal__message">
          <div class="title__menu">{{ this.modalText }}</div>
        </div>
      </modal-info>
    </div>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";
import util from "../util/index";

export default {
  data() {
    return {
      product_id: null,
      product: {},
      modalText: "",
      isLoading: true,
    };
  },
  created() {
    this.product_id = this.$route.params.id;

    this.$http
      .get(`/api/product/${this.product_id}`)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        this.modalText =
          "Algo salió mal. Por favor intentalo de nuevo más tarde.";
        this.$refs.modal.triggerModal();
        console.log(error);
      }).finally(() => {
        this.isLoading = false;
      });
  },
  filters: {
    toMoney: util.toMoney,
  },
};
</script>

<style lang="sass" scoped>
@import '../stylesheets/_mixins.sass'

.product__title
  @extend %title
  font-size: 60px

.product__description
  margin: 30px 0
  margin-bottom: 60px
  max-width: 370px

.product__main
  display: flex
  flex-flow: row wrap

.image__container
  height: 90vh
  flex: 1 0 500px
  position: relative

.text__container
  +flex(1, 0)
  flex: 1 0 300px
  padding: 40px
  box-sizing: border-box
  flex-flow: column

img.image__holder
  @extend %image-cover

.product__details
  +flex(0, 0)
  margin: 0 auto
  flex-flow: row wrap
  padding: 50px

.product__feature
  width: 180px
  padding: 15px
  line-height: 30px
  white-space: pre-line


// Product images

.gallery
  display: flex

.gallery__item
  flex: 1 0
  height: 45vw

  &:first-child
    padding-right: 4.1vw

  &:last-child
    padding-left: 4.1vw

.gallery__item--centered
  padding-right: 4.1vw
  height: 35vw
  margin: 20px 0

  &:first-child
    padding-left: 4.1vw

  &:last-child
    padding-left: 0

.product__phrase
  font-size: 19px
  padding: 8vw 4vw
  text-align: center

.product__phrase--detail
  max-width: 800px
  font-size: 16px
  padding: 2vw 30px
  margin: 0 auto

.steps__container
  +flex(1, 0)
  flex-flow: row wrap
  padding: 5vw 0

.steps__item
  +flex(0, 1)
  padding: 10px 20px
  flex-flow: column nowrap

  .step__count
    +flex(1, 1)
    +squared(80px)
    border-radius: 50%
    border: 2px solid #191919
    margin-bottom: 20px

  .step__description
    max-width: 300px
    text-align: center

// Main button
.btn-buy
  display: flex
  width: 230px
  height: 60px
  position: absolute
  right: 0
  bottom: 15%
  transform: translateX(50%)
  cursor: pointer

  &:hover
    > .btn-buy--left
      color: white
      border-color: white
      
      &:after
        top: 0
        left: 0px

    > .btn-buy--right
      color: black
      border-color: black

      &:after
        top: 0
        right: 0

.btn-buy__item
  +flex(1, 1)
  flex: 1 0
  font-weight: bolder
  border: 1px solid transparent
  position: relative
  overflow: hidden

  &:before, &:after
    content: ''
    position: absolute
    +squared(calc(100%))
    z-index: -1
    transition: 0.25s ease-in

  &:before
    top: 1px
    left: 1px

.btn-buy--left
  color: black
  border-color: black
  border-right-width: 0 

  &:before
    background: white

  &:after
    left: 100%
    background: black

.btn-buy--right
  color: white
  border-color: white
  border-left-width: 0

  &:before 
    background: black
  
  &:after
    right: 100%
    background: white

@media (max-width: 816px)
  .btn-buy
    left: 50%
    bottom: -10px
    transform: translate(-50%, 100%)

  .product__title
    margin-top: 100px

</style>