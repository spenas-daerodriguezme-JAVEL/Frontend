<template>
  <div class="checkout">
    <div class="section">Hola Daniel</div>

    <selector-list
      :options="options">

    <div slot="Órdenes de compra y devoluciones">
      <div class="contact__detail">
        <div class="contact__item">
          <div class="contact__title">Contacto</div>
          Daniel Rodríguez
          dlsusp@gmail.com
        </div>

        <div class="contact__item">
          <div class="contact__title">Dirección</div>
          Carrera 57b #66 - 35
        </div>
      </div>

      <table cellspacing="0">
        <tbody>
          <tr>
            <th>Orden</th>
            <th>Fecha</th>
            <th>Información</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
          <tr>
            <td>Orden</td>
            <td>Fecha</td>
            <td>Información</td>
            <td>Total</td>
            <td>Estado</td>
          </tr>
          <tr>
            <td>Orden</td>
            <td>Fecha</td>
            <td>Información</td>
            <td>Total</td>
            <td>Estado</td>
          </tr>
          <tr>
            <td>Orden</td>
            <td>Fecha</td>
            <td>Información</td>
            <td>Total</td>
            <td>Estado</td>
          </tr>
          <tr>
            <td>Orden</td>
            <td>Fecha</td>
            <td>Información</td>
            <td>Total</td>
            <td>Estado</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div slot="Contacto">
      <b>Contacto</b>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis porro eos delectus.

    </div>

    </selector-list>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import Cart from '../components/shared/Cart.vue';
import InputBase from '../components/InputBase.vue';
import SelectorList from '../components/ui/SelectorList.vue';

export default {
    data() {
        return {
            options: [
                'Información de contacto',
                'Órdenes de compra y devoluciones',
                'Solicitud de productos',
                'Quejas, reclamos, sugerencias y felicitaciones',
            ],
        };
    },
    mounted() {

    },
    components: {
        InputBase,
        Cart,
        SelectorList,
    },
};
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.section
  +flex(1, 1)
  background: #B0B2A1
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
