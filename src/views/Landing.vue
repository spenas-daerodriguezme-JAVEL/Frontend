<template>
  <div class="hello">
    <base-menu></base-menu>
    <div class="image-holder">
      <div class="img-col">
        <img src="../assets/productos/QUITA MANCHAS.jpg" alt="">
        <div class="img-col__title">Desmancha y blanquea como por arte de magia</div>
      </div>
      <div class="img-col">
        <img src="../assets/productos/DIFUSOR.jpg" alt="">
        <div class="img-col__title">Una fragancia atractiva y excitante. Única</div>
      </div>
      <div class="img-col">
        <img src="../assets/productos/removedor.jpg" alt="">
        <div class="img-col__title">Sin restregar y sin esfuerzo.
        Es otro nivel de desengrase</div> 
      </div>
    </div>
    <div class="section-content">
      <div class="section__text">
        <div class="section__text__title">ELIMINADOR DE OLORES:

          Con moléculas aromáticas para reducir olores
        </div>
        <div class="section__text__subtitle">Poder antiséptico natural</div>
        <div class="section__text__content section__text__content--big">
          Mezcla aromática con aceites esenciales
          de tomillo, clavo, canela y gaulteria.
        </div>
      </div>
      <div class="section__image">
        <img src="../assets/productos/ELIMINADORDEOLORES.jpg" alt="">
      </div>
    </div>
    <div class="spacer"></div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import Menu from '../components/shared/Menu.vue'
import Footer from '../components/shared/Footer.vue'

export default {
  data () {
    return {
      
    }
  },
  components: {
    'BaseMenu': Menu,
    'BaseFooter': Footer
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/_mixins.sass'
@import '../stylesheets/_fonts.sass'

.spacer
  background: rgba(black, .2)
  height: 500px

.image-holder
  background: #191919
  height: 45vw
  min-height: 280px
  max-height: 350px
  color: white
  overflow: hidden
  text-align: center

.img-col
  display: inline-block
  box-sizing: border-box
  width: 29%
  min-width: 270px
  margin: 0 2%
  margin-bottom: 10%
  height: 80%
  background: coral
  position: relative
  transform: translateY(-50%)
  top: 50%

  img
    width: 100%
    height: 100%
    object-fit: cover

.img-col__title
  white-space: pre-line 
  max-width: 100%
  padding: 0 20px
  position: absolute
  font-size: 1.7vw
  color: white
  bottom: 11%
  text-align: left
  font-family: $title-font

.section-content
  +flex(1, 1)

.section__text
  width: 35%
  padding: 50px

  .section__text__title
    font-family: $title-font
    font-size: 44px
    white-space: pre-line

  .section__text__subtitle
    padding: 15px 3px 15px 55px
    font-family: $title-font
    font-size: 18px
    position: relative

    &:after
      content: ''
      position: absolute
      width: 35px
      height: 4px
      background: black
      top: 50% 
      left: 0
      transform: translateY(-50%)

  .section__text__content
    text-align: justify
    font-size: 17px
    padding: 15px 0
    line-height: 20px

  .section__text__content--big
    font-size: 19px
    
.section__image
  width: 65%

  img
    width: 100%
    height: 100%
    object-fit: cover

@media (max-width: 850px)
  .section-content
    flex-direction: column

  .section__text
    box-sizing: border-box
    width: 100%
    order: 1

    .section__text__title
      font-size: 38px
      line-height: 35px

  .section__image
    width: 100%  
    height: 70vh

@media (max-width: 890px)
  .img-col
    width: 45%

@media (max-width: 1100px)
  .img-col__title
    font-size: 18px


</style>
