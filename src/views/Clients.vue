<template>
  <div class="clientes">
    <div class="title">SÉ UN CLIENTE EXCLUSIVO.</div>
    <div class="title-zone">
      <div class="subheading">Únete, acumula envases plásticos y obtén recompensas.</div>

      <br><br>
      <i>¡Es muy fácil!</i>
      <br>
      <b>Sigue estos 4 pasos</b>
      <br>
      <br>
    </div>

    <div class="fluid-container">
      <div class="step__item">
        <div class="step__image step__image--circular">1</div>
        <div class="step__content">REGÍSTRATE EN NUESTRA TIENDA EN LÍNEA.</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">2</div>
        <div class="step__content">REALIZA 10 COMPRAS EN EL MES.</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">3</div>
        <div class="step__content">LAVA, DESINFECTA, SECA Y GUARDA LOS ENVASES PLÁSTICOS.</div>
      </div>
      <div class="step__item">
        <div class="step__image step__image--circular">4</div>
        <div class="step__content">OBTÉN RECOMPENSAS.</div>
      </div>
    </div>

    <div class="fluid-container">
      <div class="client">
        <div class="title">CLIENTE NUEVO.</div>
        <div class="client__description">Crea tu cuenta y disfruta de:</div>
        <div class="client__benefits">
          <li>1 MUESTRA DE PRODUCTO EN LA PRIMERA COMPRA.</li>
          <li>PRUEBA ANTES QUE NADIE LOS LANZAMIENTOS.</li>
        </div>
      </div>
      <div class="client">
        <div class="title">CLIENTE FRECUENTE.</div>
        <div class="client__description">Acumula 5 compras en el mes, regresa los envases plásticos limpios y en perfectas condiciones, alcanza este nivel y suma nuevos beneficios</div>
        <div class="client__benefits">
          <li>HASTA 3 MUESTRAS DE PRODUCTO A SOLICITUD EN EL MES.</li>
          <li>PRUEBA ANTES QUE NADIE LOS LANZAMIENTOS.</li>
          <li>PRODUCTO DE CUMPLEAÑOS EN EL MES DE TU CUMPLEAÑOS.</li>
          <li>BICARBONATO DE SODIO 200 gr. DE CORTESÍA POR LA COMPRA DE UNA FRAGANCIA 60 Ml.</li>
          <li>OFERTAS PERSONALIZADAS</li>
        </div>
      </div>
      <div class="client">
        <div class="title">CLIENTE EXCLUSIVO.</div>
        <div class="client__description">Acumula 10 compras en el mes, regresa los envases plásticos limpios y en perfectas condiciones. Vive la experiencia de ser exclusivo.</div>
        <div class="client__benefits">
          <li>MUESTRA DE PRODUCTO SIN LÍMITE DE SOLICITUDES EN CADA MES.</li>
          <li>PRUEBA ANTES QUE NADIE LOS LANZAMIENTOS.</li>
          <li>PRODUCTO DE CUMPLEAÑOS EN EL MES DE TU CUMPLEAÑOS</li>
          <li>QUITA MACHAS GRANULADO 200 gr. DE CORTESÍA POR LA COMPRA DE UNA FRAGANCIA 60 ml.</li>
          <li>OFERTAS PERSONALIZADAS.</li>
          <li>CONGELACIÓN DE PRECIOS.</li>
          <li>ACCESO AL PORTAFOLIO SECRETO DE PRODUCTOS INTELIGENTES.</li>
          <li>TE COMPRAMOS EL ENVASE PLÁSTICO POR VALOR DE $300 COP CADA UNO.</li>
        </div>
      </div>
    </div>

    <div class="title" style="margin-top: 100px">RECOMENDACIONES PARA DEVOLVER
      ENVASE PLÁSTICO.
    </div>
    <div class="title-zone">
      <div class="subheading">
        Puedes regresar todos los envases plásticos y obtener beneficios por eso, pero, es
        indispensable que los envases regresen en perfectas condiciones. Te invitamos a seguir
        los siguientes pasos.

      </div>
    </div>

    <div class="fluid-container" style="margin-bottom: 100px">
      <div class="step__item">
        <div class="step__image">1</div>
        <div class="step__content">LAVAR POR DENTRO Y POR FUERA CON DETERGENTE</div>
      </div>
      <div class="step__item">
        <div class="step__image">2</div>
        <div class="step__content">DESINFECTAR CON CLORO Y VOLVER A LAVAR BIEN</div>
      </div>
      <div class="step__item">
        <div class="step__image">3</div>
        <div class="step__content">SECAR A LA SOMBRA PROTEGIDO DEL SOL, LA LLUVIA, EL POLVO Y LA HUMEDAD.</div>
      </div>
      <div class="step__item">
        <div class="step__image">4</div>
        <div class="step__content">GUARDAR LOS ENVASES PLÁSTICOS EN UNA BOLSA HERMÉTICA.</div>
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

</style>
