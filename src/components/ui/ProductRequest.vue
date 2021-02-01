<template>
  <div>
     En caso de que algún producto no se encuentre en existencia. Llene el formulario con los productos que necesite y nos pondremos en contacto con usted

      <div class="frow spacing">
        <div class="col"><h3>Nombre</h3></div>
        <div class="col"><h3>Presentación</h3></div>
        <div class="col"><h3>Cantidad</h3></div>
        <div class="col"><h3>Acciones</h3></div>
      </div>
        <hr>
      <div v-for="(product, index) in products">
        <div class="frow spacing">
          <div class="col inline">
          <input class="table-input" type="text" v-model="product.name">
          </div>
          <div class="col inline">
          <input class="table-input"  type="text" v-model="product.presentation">
          </div>
          <div class="col inline">
          <input class="table-input"  type="text" v-model="product.quantity">
          </div>
          <div class="col inline">
          <div class="icon btn" @click="addProduct(index)" style="max-width: 100px; ">+</div>
          <div class="icon btn" @click="removeProduct(index)" v-show="products.length > 1" style="max-width: 100px; ">-</div>
          </div>
        </div>
      </div>
         <div class="frow">
          <div class="btn" @click="" style="max-width: 200px; ">Enviar</div>
        </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [{ name: '', presentation: '', quantity: '' }],
  }),
  methods: {
    addProduct(index) {
      this.products.splice(index + 1, 0, { name: '', presentation: '', quantity: '' });
    },

    removeProduct(index) {
      this.products.splice(index, 1);
    },
  },
  computed: {

  },
};
</script>

<style lang="sass" scoped>
@import '../../stylesheets/global.sass'

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

.spacing
  justify-content: space-around !important

.inline
  display: flex !important

.icon
  font-size: 1.2rem !important

.table-input
  padding: 20px 30px 0

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

.col
  justify-content: center;
  align-items: center;

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
