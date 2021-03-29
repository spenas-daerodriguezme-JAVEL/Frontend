<template>
  <div class="mision">

    <div class="rigid-container">
      <div class="box60 image-holder rigid-container__img">
        <img src="https://storage.googleapis.com/thechemcie/Declaracion_de_mision_imagen_1.webp" alt="misión 1">
      </div>
      <div class="box40 frcenter-h motto-main">
        <div class="title-res">
          DECLARACIÓN DE
          MISIÓN
        </div>

        - Estos son los principios que rigen el cumplimiento de nuestra misión día a día
      </div>
    </div>

     <div class="shipping">
      <div
        class="marquee-text"
      >CREAMOS UN LUGAR DONDE LAS PERSONAS PUEDAN ENCONTRAR Y COMPRAR EN LÍNEA TODO TIPO DE PRODUCTOS QUÍMICOS A PRECIOS MUY BAJOS</div>
    </div>

    <div class="fluid-container">
      <div class="column-text">
        <b>PRODUCTOS</b>

        Garantizamos la satisfacción de nuestros clientes, porque, nos preocupamos por desarrollar nuevas fórmulas, técnicas y tecnologías que cumplan con los estándares más altos de la industria química

        <b>CENTROS DE SERVICIO AL CLIENTE</b>

        Nos anticipamos a nuestros clientes con el fin de resolver sus inquietudes y asesorarlos correctamente

      </div>

      <div class="column-text">
        <b>COLABORADORES</b>

        estamos comprometidos con la inclusión y la diversidad. Por eso, nos tratamos con respeto y dignidad.

        <b>CLIENTES</b>

        Estamos centrados en nuestros clientes. Ellos son nuestra prioridad. Nos ganamos su confianza y construimos relaciones comerciales a largo plazo

      </div>

      <div class="column-text column-text--black">
        <b>MEDIO AMBIENTE</b>

        Recuperamos todos los envases plásticos que utilizamos y trabajamos arduamente hacia una transición operativa en la cual todos nuestros productos sean biodegradables, porque, nuestro compromiso es contribuir día a día con la preservación de las especies y su hábitat

        <b>TECNOLOGÍA</b>

        Creemos en un futuro conectado donde cada avance mejorará la calidad de vida de todos nosotros. Por eso, nos actualizamos constantemente y nos enfocamos en los desarrollos que nos permitirán elevar el nivel de nuestra empresa en todas las áreas

      </div>
    </div>

    <div class="image-holder image__2">
      <img src="https://storage.googleapis.com/thechemcie/Declaracion_de_mision_imagen_2.webp" alt="misión 2">
    </div>

    <div class="fluid-container">
      <div class="column-text">
        <b>ACCESIBILIDAD</b>

        Entregamos rápidamente todos nuestros productos y trabajamos para tener los precios más bajos de la industria química, porque, estamos obsesionados con la satisfacción total de nuestros clientes

      </div>

      <div class="column-text">
        <b>SEGURIDAD</b>

      Nos preocupamos por la salud, la integridad y la seguridad de nuestros clientes. Por eso, los capacitamos continuamente sobre las indicaciones de peligro y los consejos de prudencia que deben cumplir siempre para evitar accidentes

      </div>

      <div class="column-text">
        <b>INNOVACIÓN</b>

        Invertimos todos nuestros recursos en proyectos innovadores que simplifiquen los procesos de compra y recepción de productos a nuestros clientes

        <b>INVERSIONISTAS</b>

        Respondemos íntegramente con todas nuestras responsabilidades para que aquellos que se relacionen con nosotros crezcan y perduren
      </div>
    </div>
    <div class="image-holder" style="height: 80vh; margin: 50px 0">
      <img src="https://storage.googleapis.com/thechemcie/Delaracion_de_mision_imagen_3.webp" alt="misión 3">
    </div>
    <!-- <div class="fluid-container images-container">
      <div class="column-image image-holder">
        <img src="../assets/productos/fwdneuvosavancesyfotos/CLORO.jpg" alt="">
      </div>
      <div class="column-image image-holder">
        <img src="../assets/productos/fwdneuvosavancesyfotos/CREOLINA.jpg" alt="">
      </div>
      <div class="column-image image-holder">
        <img src="../assets/productos/fwdneuvosavancesyfotos/DESINFECTANTE.jpg" alt="">
      </div>
    </div> -->
    <div v-if="products && products.length > 0">
      <div class="title">
        PRODUCTOS.
      </div>

      <div class="slideshow">
        <div class="images-box">
          <div class="image-box__item" v-for="product in products" :key="product._id" @click="showDetail(product._id)">
            <div class="image-box__item__img">
              <img :src="getImage(product.properties.images)" alt="product">
            </div>
            <div class="image-box__item__desc">
              <div class="imb-title">
                {{ product.name }}.
                {{ product.capacity }}.
              </div>
              <div class="imb-price">
                {{ product.price | toMoney }}
              </div>
            </div>
            <div class="buy__container">
              <button class="buy__item"
                @click.stop="sendToCart(product)"
                :disabled="product.quantity <= 0"
              >
                Comprar
              </button>
              <p v-if="product.quantity <= 0">Producto agotado</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import util from '../util/index';

export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await this.$http.get('/api/product/carousel');
      console.log(response);
      this.products = response.data;
    } catch (error) {
      this.products = [];
      console.log(error);
    }
  },
  methods: {
    ...mapMutations([
      'addToCart',
    ]),
    sendToCart(product) {
      const copy = util.deepCopy(product);
      copy.preview = this.getImage(product.properties.images);
      this.addToCart(copy);
    },
    getImage(images) {
      if (images.length < 2) {
        return require('../assets/productos/QUITA MANCHAS.jpg');
      }

      return images[1];
    },
    showDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    },
  },
  filters: {
    toMoney: util.toMoney,
  },
};
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.slideshow
  position: relative
  overflow: hidden
  height: 470px

.images-box
  +flex(0, 0)
  width: 200%
  height: 100%
  position: absolute
  animation: slideshow 15s linear infinite

  &:hover
    animation-play-state: paused

  .image-box__item
    width: 33.333vw
    margin-left: 30px
    box-sizing: border-box
    cursor: pointer

  .image-box__item__img
    height: 320px
    img
      @extend %image-cover

  .image-box__item__desc
    +flex(0, 0)
    font-size: 18px
    justify-content: space-between
    font-weight: bold
    white-space: pre-line

@keyframes slideshow
  100%
    transform: translateX(-50%)

.title
  +flex(0, 1)
  margin: 30px 20px
  text-align: center
  @extend %title
  font-size: 50px

.motto-main
  padding: 30px
  flex-direction: column
  font-size: 19px
  white-space: pre-line

.shipping
  @extend %title
  font-size: 110px
  padding: 40px  0
  overflow: hidden
  white-space: nowrap

.marquee-wrapper
  padding: 40px 0
  overflow: hidden
  white-space: nowrap

.marquee-text
  display: inline-block
  animation: marquee 21s linear infinite
  padding-left: 100%

.column-text
  width: 280px
  font-size: 17px
  margin: 30px 15px
  white-space: pre-line
  padding: 8px

.column-text--black
  background: black
  color: white

.column-image
  width: 300px
  height: 450px

.images-container
  padding: 50px 0
  background: #cecece

.rigid-container__img
  height: 90vh

.buy__container
  display: flex
  flex-direction: column
  align-items: center

  p
    font-weight: 600
    margin: 5px

.buy__item
  box-sizing: border-box
  width: 100%;
  height: 2.5rem;
  background: black
  color: white
  font-weight: bold
  font-size: 16px
  cursor: pointer
  border: 1px solid white
  transition: transform .2s;

  &:hover
    transform: scale(1.05);

  &:active
    background: white
    color: black

  &:disabled
    background: gray
    transform: scale(1);

.image__2
  height: 80vh
  margin: 50px 0

@media (max-width: 800px)
  .box40, .box60
    width: auto
    padding-top: 0px

  .title-res
    font-size: 45px

  .images-box
    width: 600%
    .image-box__item__desc
      flex-direction: column
      font-size: 15px

    .image-box__item
      width: 500px

  .slideshow
    height: 480px

  .shipping
    font-size: 28px

  .rigid-container
    flex-direction: column

    .rigid-container__img
      height: 50vh

  .image__2
    height: 60vh

  @keyframes slideshow
    100%
      transform: translateX(-83.33%)
</style>
