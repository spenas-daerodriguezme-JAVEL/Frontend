<template>
  <div class="checkout">
    <div class="section">Hola Santiago</div>

    <selector-list
      :options="options">

      <div slot="Información de contacto">
        <UserInfo/>
      </div>

    <div slot="Órdenes de compra">
      <!-- <div class="contact__detail">
        <div class="contact__item">
          <div class="contact__title">Contacto</div>
          Daniel Rodríguez
          dlsusp@gmail.com
        </div>

        <div class="contact__item">
          <div class="contact__title">Dirección</div>
          Carrera 57b #66 - 35
        </div>
      </div> -->

      <table cellspacing="0">
        <tbody>
          <tr>
            <th>Orden</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
          <tr>
            <td><a href="">#1</a></td>
            <td>20-09-2020</td>
            <td>$50000</td>
            <td>En tramite</td>
          </tr>
          <tr>
            <td><a href="">#2</a></td>
            <td>20-09-2020</td>
            <td>$20000</td>
            <td>Pendiente</td>
          </tr>
          <tr>
            <td><a href="">#4534</a></td>
            <td>20-09-2020</td>
            <td>$70000</td>
            <td>Rechazado</td>
          </tr>
          <tr>
            <td><a href="">#134</a></td>
            <td>20-09-2020</td>
            <td>$50000</td>
            <td>Completado</td>
          </tr>

        </tbody>
      </table>

    </div>
    <div slot="Solicitud de productos">
      <!-- <b>Contacto</b> -->

      En caso de que algún producto no se encuentre en existencia. Llene el formulario con los productos que necesite y nos pondremos en contacto con usted
<table cellspacing="0">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Presentación</th>
            <th>Cantidad</th>
          </tr>
          <tr>
            <td><input> </input></td>
            <td><input> </input></td>
            <td><input> </input></td>

          </tr>
          <tr>
            <td><input> </input></td>
            <td><input> </input></td>
            <td><input> </input></td>

          </tr>
          <tr>
            <td><input> </input></td>
            <td><input> </input></td>
            <td><input> </input></td>

          </tr>
          <tr>
            <td><input> </input></td>
            <td><input> </input></td>
            <td><input> </input></td>

          </tr>

        </tbody>
      </table>

       <div class="frow">
          <div class="btn" @click="register" style="max-width: 200px; ">Enviar</div>
        </div>
    </div>

   <div slot="Quejas, reclamos, sugerencias y felicitaciones">
     <p>¿Cuál es el objeto de su petición, queja / reclamo o recurso? ¿Cuáles son los hechos en que fundamenta su petición, queja / reclamo o recurso? ¿Cuál es su sugerencia? ¿Cuál es su felicitación?</p>
     <textarea style="width:1000px;height:300px"> </textarea>
     <div style="display: inline-block;">
       <p style="margin: 12px 0;">Documentos anexos</p>
       <input type="file" name="" id="">

     </div>
      <div class="frow">
          <div class="btn" @click="register" style="max-width: 200px; ">Enviar</div>
        </div>
   </div>
    </selector-list>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import Cart from '../components/shared/Cart.vue';
import InputBase from '../components/InputBase.vue';
import SelectorList from '../components/ui/SelectorList.vue';
import UserInfo from '../components/shared/UserInfo.vue';

export default {
  data() {
    return {
      options: [
        'Información de contacto',
        'Órdenes de compra',
        'Solicitud de productos',
        'Quejas, reclamos, sugerencias y felicitaciones',
      ],
    };
  },
  mounted() {

  },
  components: {
    InputBase,
    UserInfo,
    Cart,
    SelectorList,
  },
};
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.section
  +flex(1, 1)
  background: black
  color: white
  height: 30vw
  font-size: 60px
  @extend %title

h1
  font-size: 40px

.row
  +flex(0, 0)
  min-height: 100vh

  > *
    box-sizing: border-box

.w-70
  width: 70%

.w-30
  width: 70%

.fix__products
  width: 30vw
  height: 100vh
  background: #B0B2A1

.pad
  padding: 30px

.center--responsive
  +flex(0, 0)

.frow
  +flex(0, 0)
  width: 100%
  flex-wrap: wrap

.title
  font-size: 24px
  @extend %title

.title--responsive
  font-size: 4vw

.input--medium
  margin: 2%
  flex: 1 0 220px

.input--small
  margin: 2%
  flex: 1 0 160px

.help__container
  display: flex
  justify-content: space-between

.help__info
  font-size: 13px
  max-width: 380px
  white-space: pre-line

.contact__detail
  display: flex
  justify-content: space-between
  margin-bottom: 30px

.contact__item
  max-width: 250px
  white-space: pre-line

.contact__title
  font-weight: bold
  font-size: 20px
  margin: 20px 0

@media (max-width: 820px)
  .center--responsive
    align-items: center

@media (max-width: 550px)
  .row
    flex-flow: column

  .w-30, .w-70
    height: auto
    width: 100%

</style>
