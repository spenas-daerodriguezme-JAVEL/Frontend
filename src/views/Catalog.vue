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
          :default-option="'Todo'"
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
      :pages="5">
      
      <div slot="1">
        <div class="catalog-box">
          
          <div class="item">
            <img src="../assets/productos/QUITA MANCHAS.jpg" alt="">
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA MANCHAS
                GRANULADO.
                400 gr.
              </div>
              <div class="item__price">
                $6000
              </div>
            </div>
            Blanquea la ropa blanca. No contiene cloro. Desincrusta manchas en ropa de color. Desodoriza las fibras textiles.
          </div>
          </div>

          <div class="item">
            <img src="../assets/productos/fwdneuvosavancesyfotos/QUITAMANCHASLIQ.jpg" alt="">
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA MANCHAS
                LÍQUIDO.
                250 ml.
              </div>
              <div class="item__price">
                $6700
              </div>
            </div>
            Remueve manchas de productos industriales y alimenticios en las telas blancas y de color. Elimina la mancha del desodorante en todo tipo de camisas y camisetas,sin dañar los colores.
          </div>
          </div>

          <div class="item">
            <img src="../assets/productos/QUITA TINTA.jpg" alt="">
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA TINTA
                10 ml.
              </div>
              <div class="item__price">
                $5700
              </div>
            </div>
            Borra cualquier tipo de tinta que haya caído en ropa y superficies. No decolora.
          </div>
          </div>

        </div>

        <div class="catalog-box2">

          <div class="item">
            <img src="../assets/productos/QUITAOXIDO.jpg" alt="">
          </div>

          <div class="item">
            <img src="../assets/productos/QUITAOXIDO.jpg" alt="">
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA ÓXIDO INSTANTÁNEO.
                10 ml.
              </div>
              <div class="item__price">
                $5700
              </div>
            </div>
            Borra cualquier tipo de tinta que haya caído en ropa y superficies. No decolora.
          </div>
          </div>

        </div>

        <div class="catalog-box">

          <div class="item">
            <img src="../assets/productos/QUITA TINTA.jpg" alt="">
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                BICARBONATO
                DE SODIO.
                400 gr.
              </div>
              <div class="item__price">
                $6000
              </div>
            </div>
            Es de uso medicinal, doméstico y cosmético.
          </div>
          </div>

          <div class="item">
            <div class="anounce">
              TU FORMA
              DE LAVAR
              CAMBIARÁ
              PARA 
              SIEMPRE.
            </div>
          </div>

          <div class="item">
            <img src="../assets/productos/QUITA TINTA.jpg" alt="">
          <div class="item__description">
            <div class="item__heading">
              <div class="item__title">
                QUITA TINTA
                10 ml.
              </div>
              <div class="item__price">
                $5700
              </div>
            </div>
            Borra cualquier tipo de tinta que haya caído en ropa y superficies. No decolora.
          </div>
          </div>

        </div>

      </div>
      <div slot="2">Item 2</div>
      <div slot="3">Item 3</div>
      <div slot="4">Item 4</div>
      <div slot="5">Item 5</div>
      
    </pagination>

  </div>
</template>

<script>
import Pagination from '../components/ui/Pagination.vue'
import CustomSelector from '../components/ui/CustomSelector.vue'

export default {
  data() {
    return {
      selected: '',
      options: [
        'Todo',
        'Todo 1',
        'Todo 2',
        'Todo 3'
      ]
    }
  },
  components: {
    CustomSelector,
    Pagination
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
  position: relative

  img
    height: 400px
    @extend %image-cover

  // &:hover > .buy__item
  //   height: 39px

  // .buy__item
  //   overflow: hidden
  //   height: 0
  //   position: absolute
  //   left: 50%
  //   top: 400px
  //   transform: translate(-50%, -100%)
  //   background: red
  //   color: white
  //   text-align: center
  //   padding: 10px 15px
  //   z-index: 1
  //   transition: .3s
    
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

.anounce
  @extend %title
  font-size: 45px
  text-align: center

@media (max-width: 630px)
  .catalog-box2
    flex-wrap: wrap

</style>
