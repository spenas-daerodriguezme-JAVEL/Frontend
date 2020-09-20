<template>
  <div>

    <div class="product edit-product">
	<div class="row">
		<a href="localhost:8080/admin">volver</a>
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
          <input v-model="product.business_line" type="text" />
        </div>
        <div class="flex">
          <div class="tag">Presentación disponible</div>
          <div class="field--controls">
            <input v-model="product.dimention" type="text" />
          </div>
        </div>
        <div class="field field--small">
          <div class="tag">Precio</div>
          <input v-model="product.price" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="field">
          <div class="tag">Id Descripcion</div>
          <input v-model="product.descriptionId" type="text" />
        </div>
      </div>

      <div
        class="btn btn--save"
        @click="saveForm"
      >{{ currentAction == 'Crear' ? 'Crear' : 'Guardar' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        business_line: '',
        dimention: '',
        price: '',
        descriptionId: '',
      },
    };
  },

  async beforeMount() {
	  
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
