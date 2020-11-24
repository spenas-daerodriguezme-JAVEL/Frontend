<template>
  <div>

    <div class="product edit-product">
     <div class="row">
		  <router-link class="btn" :to='url' style="max-width: 100px">Volver</router-link>
	     </div>
       <div class="row">
         <h1>
           {{title}}
         </h1>
       </div>
      <div class="row">
        <div class="field">
          <div class="tag">Nombre del producto</div>
          <input v-model="product.name" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="field field--small">
          <div class="tag">Línea de negocio</div>
          <input v-model="product.businessLine" type="text" />
        </div>
        <div class="flex">
          <div class="tag">Presentación disponible</div>
          <div class="field--controls">
            <input v-model="product.capacity" type="text" />
          </div>
        </div>
         <div class="field field--small">
          <div class="tag">Unidad de medida</div>
          <input v-model="product.measurementUnit" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="field">
          <div class="tag">Id Descripcion</div>
          <input v-model="product.properties" type="text" />
        </div>
        <div class="field field--small">
          <div class="tag">Precio</div>
          <input v-model="product.price" type="text" />
        </div>
        <div class="field">
          <div class="tag">SKU</div>
          <input v-model="product.SKU" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="field">
          <div class="tag">¿Mostrar en catálogo?</div>
          <select
            v-model="product.isActive"
            class='input-base input--medium'
          >
          <option value='true'>Si</option>
          <option value='false'>No</option>
          </select>
        </div>
        <div class="field">
          <div class="tag">Cantidad</div>
          <input v-model="product.quantity" type="text" />
        </div>
        <div class="field">
          <div class="tag">Posición de catálogo</div>
          <input v-model="product.position" type="text" />
        </div>
      </div>

      <div
        class="btn btn--save"
        @click="executeActionProduct"
      >{{ currentAction == 'Crear' ? 'Crear' : 'Guardar' }}</div>
    </div>
    <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">{{modalMessage}}</div>
      </div>
    </modal-info>
  </div>
</template>

<script>
import VAPI from '../http_common';

export default {
  data() {
    return {
	    currentAction: '',
      product: {
        name: '',
        businessLine: '',
        capacity: '',
        measurementUnit: '',
        price: '',
        SKU: '',
        isActive: true,
        quantity: 0,
        position: 1,
        properties: '',
      },
      url: '/admin',
      title: '',
      modalMessage: '',
    };
  },

  async beforeMount() {
    this.currentAction = this.$route.meta.actionType;
    if (this.currentAction === 'Editar') {
      await this.editProduct();
      this.title = 'Editar producto';
    } else if (this.currentAction === 'Crear') {
      this.title = 'Crear nuevo producto';
    }
  },
  methods: {
    async editProduct() {
      const parameter = this.$route.params.id;
      const product = await VAPI.get(`/api/product/${parameter}`);
      const productData = product.data;
      this.product = productData;
      this.product.properties = productData.properties._id;
    },
    async executeActionProduct() {
      const { modal } = this.$refs;
      try {
        let updateProduct;
        if (this.currentAction === 'Editar') {
          const parameter = this.$route.params.id;
          updateProduct = await VAPI.put(`/api/product/${parameter}`, this.product);
        } else if (this.currentAction === 'Crear') {
          updateProduct = await VAPI.post('/api/product', this.product);
        }
        if (updateProduct.status === 200) {
          this.modalMessage = 'Operación exitosa';
        }
        modal.triggerModal();
        console.log(updateProduct);
      } catch (error) {
        this.modalMessage = 'Error en servidor, vuelva a intentar';
        modal.triggerModal();
        console.log(error);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../stylesheets/global.sass

.flex
	width: 70%
	+flex(0, 0)
	flex-direction: column
	align-items: flex-start

.edit-product
	max-width: 900px
	padding: 0 10px
	margin: 30px auto

.tag
	background: black
	color: white
	padding: 7px 15px
	@extend %title

.row
	display: flex
	justify-content: space-between
	margin-bottom: 25px

input
	width: 100%
	height: 30px
	padding: 0 5px

	&[type="textarea"]
		height: 200px

textarea
	width: 100%
	height: 150px

.field
	width: 100%
	display: flex
	flex-direction: column
	align-items: flex-start

.field--small
	width: 30%

.field--controls
	+flex(0, 0)
	width: 100%
	margin-bottom: 2px

.field__control
	+flex(1, 1)
	+squared(34px)
	padding: 5px
	box-sizing: border-box
	background: black
	transition: 0.2s
	cursor: pointer
	border: 1px solid black

	&:hover
		background: white

		svg
			fill: black

	&:first-of-type
		border-right: 1px solid white

	svg
		width: 100%
		height: 100%
		fill: white

.image__preview
	+squared(280px)
	border: 1px dashed black
	position: relative
	cursor: pointer

	&:hover > svg
		+squared(58px)

	svg
		z-index: -1
		+squared(50px)
		@extend %absolute-centered
		fill: black
		transition: 0.3s

	img
		z-index: 5
		display: none
		@extend %image-cover

.btn--save
	+flex(1, 1)
	width: 150px
	height: 20px
	margin-left: auto

</style>
