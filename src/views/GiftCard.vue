<template>
  <div class="tarjeta-regalo">

    <div class="rigid-container">
      <div class="box40 frcenter-h gf-main">
        <div class="title-res">
          TARJETA
          REGALO
          ELECTRÓNICA.
        </div>

        Selecciona el formato, el importe y el mensaje que la acompañará.
      </div>
      <div class="box60 image-holder" style="height: 90vh">
        <img src="../assets/placeholders/philosophy.jpg" alt="">
      </div>
    </div>

    <div class="rigid-container">
      <div class="box40 image-holder" style="min-height: 100%">
        <img src="../assets/placeholders/philosophy.jpg" alt="">
      </div>
      <div class="box60 gf-main" >
        <b><h3>1. ELEGIR TARJETA REGALO ELECTRÓNICA.</h3></b>

        <div class="pricing-list">
          <div class="card">
            <b>TARJETA REGALO
              ELECTRÓNICA PARA
              DAMA.
            </b>
            Envío por correo electrónico.
          </div>

          <div class="card">
            <b>TARJETA REGALO
              ELECTRÓNICA PARA
              CABALLERO.
            </b>
            Envío por correo electrónico.
          </div>
        </div>

        <b><h3>2. SELECCIONAR UN IMPORTE.</h3></b>
        <div class="pricing-list">
          <div class="pricing">$20 mil.</div>
          <div class="pricing">$40 mil.</div>
          <div class="pricing">$60 mil.</div>
          <div class="pricing">$80 mil.</div>
          <div class="pricing">$100 mil.</div>
        </div>

        <b><h3>3. PERSONALIZAR EL MENSAJE.</h3></b>
        <div class="box-col">
          <b>De parte de:</b>
          <input type="text" class="input" style="width: 300px">

          <b>Para:</b>
          <input type="text" class="input" style="width: 300px">

          <b>Mensaje:</b>
          <input type="text" class="input" >
        </div>

        <div class="btn">Comprar</div>

      </div>
    </div>


    <div class="title">
      VENTAJAS DE LA TARJETA 
      REGALO ELECTRÓNICA.
      
    </div>
    <div class="fluid-container" style="margin-bottom: 100px">
      <div class="step__item">
        <div class="step__image step__image--circular">1</div>
        <div class="step__content">SIN CONGESTIÓN EN LAS VÍAS.</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">2</div>
        <div class="step__content">ENTREGA RÁPIDA</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">3</div>
        <div class="step__content">VÁLIDA EN TIENDA FÍSICA.</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">4</div>
        <div class="step__content">ES UN OBSEQUIO PERFECTO.</div>
      </div>
    </div>

  </div>  
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.title
  +flex(1, 1)
  margin-top: 30px
  text-align: center
  @extend %title
  font-size: 48px

.gf-main
  padding: 30px
  flex-direction: column
  font-size: 19px
  white-space: pre-line

.card
  border-radius: 13px
  border: 2px solid black
  padding: 30px 15px
  text-align: center
  white-space: pre-line
  margin: 5px
  display: inline-block

.pricing-list
  text-align: center

.pricing
  font-size: 17px
  font-weight: bolder
  display: inline-block
  padding: 13px 7px
  margin: 0 5px
  color: rgba(black, .1)
  background: rgba(black, .23)
  cursor: pointer
  transition: .3s

  &:hover
    transform: scale(1.05)

.btn
  display: inline-block
  font-size: 14px
  padding: 13px 10px
  background: #232323
  color: white
  text-transform: uppercase
  font-weight: bolder
  letter-spacing: 1px
  cursor: pointer
  transition: .3s

  &:hover 
    background: lighten(#232323, 7%)

.box-col
  +flex(0, 0)
  flex-direction: column

  .input
    margin-bottom: 20px 

.step__item
  width: 200px
  +flex(0, 1)
  flex-direction: column
  margin: 20px 10px 

  .step__image
    +flex(1, 1)
    +squared(110px)
    border: 4px solid black
    font-size: 2.3rem
    font-weight: bold

  .step__content
    margin-top: 30px
    text-align: center
    font-weight: bold

  .step__image--circular
    border-radius: 50%
</style>
