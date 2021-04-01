<template>
  <div class="clientes">
    <div class="title">¿QUÉ HAGO CON LOS ENVASES PLÁSTICOS?</div>
    <div class="title-zone">
      <div class="subheading">
        Cree una cuenta, acumule nuestros envases y preserve las especies marinas
      </div>

      <br /><br />
      <i>¡Es muy fácil!</i>
      <br />
      <b>Siga estos 4 pasos</b>
      <br />
      <br />
    </div>

    <div class="fluid-container">
      <div class="step__item">
        <div class="step__image step__image--circular">1</div>
        <div class="step__content">CREE UNA CUENTA</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">2</div>
        <div class="step__content">
          REÚNA LOS ENVASES PLÁSTICOS DE The Chemical Science Company S.A.S
        </div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">3</div>
        <div class="step__content">LAVE, DESINFECTE, SEQUE Y GUARDE LOS ENVASES PLÁSTICOS</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">4</div>
        <div class="step__content">COMUNÍQUESE CON NOSOTROS Y RECOGEMOS LOS ENVASES</div>
      </div>
    </div>

    <div class="title" style="margin-top: 100px;">
      RECOMENDACIONES PARA DEVOLVER ENVASE PLÁSTICO
    </div>
    <div class="title-zone">
      <div class="subheading">
        Regrese los envases plásticos siguiendo estas indicaciones:
      </div>
    </div>

    <div class="fluid-container" style="margin-bottom: 100px;">
      <div class="step__item">
        <div class="step__image">1</div>
        <div class="step__content">LAVE EL ENVASE POR DENTRO Y POR FUERA CON DETERGENTE</div>
      </div>
      <div class="step__item">
        <div class="step__image">2</div>
        <div class="step__content">
          AGREGUE SUAVIZANTE PARA ROPA ADENTRO DEL ENVASE Y ENJUAGUE CON AGUA
        </div>
      </div>
      <div class="step__item">
        <div class="step__image">3</div>
        <div class="step__content">
          SEQUE EL ENVASE A LA SOMBRA, PROTEGIDO DEL SOL, LA LLUVIA, EL POLVO Y LA HUMEDAD
        </div>
      </div>
      <div class="step__item">
        <div class="step__image">4</div>
        <div class="step__content">
          GUARDE LOS ENVASES PLÁSTICOS EN UNA BOLSA LIMPIA Y CONTÁCTENOS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.title
  +flex(1, 1)
  margin-top: 30px
  text-align: center
  @extend %title
  font-size: 48px

.title-zone
  text-align: center
  white-space: pre-line
  font-size: 17px

.subheading
  font-size: 22px

.fluid-container
  +flex(1, 0)
  flex-wrap: wrap
  justify-content: space-around

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

.client
  width: 300px
  margin: 10px

  .client__description
    text-align: center
    margin-top: 10px
    min-height: 100px

  .client__benefits
    +flex(1, 0)
    flex-direction: column
    font-weight: bold
    min-height: 380px

    li
      font-size: 14px
      margin: 8px 0

@media (max-width: 800px)

  .title
    margin-top: 20px
    font-size: 38px
</style>
