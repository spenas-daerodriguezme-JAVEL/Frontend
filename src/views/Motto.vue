<template>
  <div class="mision">

    <div class="rigid-container">
      <div class="box60 image-holder" style="height: 90vh">
        <img src="../assets/placeholders/philosophy.jpg" alt="">
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

    <div class="image-holder" style="height: 80vh; margin: 50px 0">
      <img src="../assets/productos/DIFUSOR.jpg" alt="">
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

    <div class="fluid-container images-container">
      <div class="column-image image-holder">
        <img src="../assets/productos/fwdneuvosavancesyfotos/CLORO.jpg" alt="">
      </div>
      <div class="column-image image-holder">
        <img src="../assets/productos/fwdneuvosavancesyfotos/CREOLINA.jpg" alt="">
      </div>
      <div class="column-image image-holder">
        <img src="../assets/productos/fwdneuvosavancesyfotos/DESINFECTANTE.jpg" alt="">
      </div>
    </div>

    <div class="title">
      PRODUCTOS INTELIGENTES.
    </div>

    <div class="slideshow">
      <div class="images-box">
        <div class="image-box__item" v-for="product in products" :key="product._id" @click="showDetail(product._id)">
          <div class="image-box__item__img">
            <img :src="getImage(product.img)" alt="">
          </div>
          <div class="image-box__item__desc">
            <div class="imb-title">
              {{ product.title }}.
              {{ product.capacity }}.
            </div>
            <div class="imb-price">
              {{ product.price | toMoney }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import util from '../util/index';

export default {
  data() {
    return {
      products: [
        {
          _id: '5f302ada1b91f680cda672b6',
          title: 'QUITA MANCHAS GRANULADO',
          capacity: '400 gr',
          price: 6000,
          img: '/productos/QUITA MANCHAS.jpg',
        },
        {
          _id: '5f302ada1b91f64d0ea672bb',
          title: 'QUITA MANCHAS LÍQUIDO',
          capacity: '250 ml',
          price: 6700,
          img: '/productos/fwdneuvosavancesyfotos/QUITAMANCHASLIQ.jpg',
        },
        {
          _id: '5f302ada1b91f68ebda672bd',
          title: 'QUITA TINTA',
          capacity: '10 ml',
          price: 5700,
          img: '/productos/QUITA TINTA.jpg',
        },
        {
          _id: '5f302ada1b91f63db3a672b5',
          title: 'QUITA MANCHAS GRANULADO',
          capacity: '400 gr',
          price: 6000,
          img: '/productos/QUITA MANCHAS.jpg',
        },
        {
          _id: '5f302ada1b91f63cc4a672bf',
          title: 'QUITA MANCHAS LÍQUIDO',
          capacity: '250 ml',
          price: 6700,
          img: '/productos/fwdneuvosavancesyfotos/QUITAMANCHASLIQ.jpg',
        },
        {
          _id: '5f302ada1b91f6f17aa672d4',
          title: 'QUITA TINTA',
          capacity: '10 ml',
          price: 5700,
          img: '/productos/QUITA TINTA.jpg',
        },
      ],
    };
  },
  methods: {
    getImage(url) {
      return require('../assets' + url);
    },
    showDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    }
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
  height: 430px

.images-box
  +flex(0, 0)
  width: 200vw
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
    // transform: translateX(-66.6666%)
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

@media (max-width: 800px)
  .box40, .box60
    width: auto 

</style>
