<template>
  <div id="app">

    <div class="product edit-product">
     <div class="row">
      <a class="btn" href="/my-account" style="max-width: 100px">Volver</a>
     </div>
       <div class="row">
         <h1>
           Cambiar Contraseña
         </h1>
       </div>
         <h3>Por favor provea la siguiente información para cambiar su contraseña</h3>
    </div>
		<div class="product edit-product">
				<input-base :label="'Antigua contraseña'"
				type="password"
				class="input--small"
				v-model="oldPassword" ></input-base>
				<input-base :label="'Nueva contraseña'"
			 	class="input--small"
				type="password"
        :hasError="!passwordMatch"
				v-model="password"></input-base>
				<input-base :label="'Confirme contraseña'"
				class="input--small"
				type="password"
        :hasError="!passwordMatch"
				v-model="passwordConfirmation"></input-base>
			<div class="text--error text--right" v-if="!passwordMatch">Las contraseñas no coinciden</div>
				<div
      class="btn btn--save"
      @click="savePassword"
    >Guardar</div>
		</div>

    <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">{{modalMessage}}</div>
      </div>
    </modal-info>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '/admin',
      modalMessage: '',
      isEdit: false,
      deleteUrl: '',
      password: '',
      passwordConfirmation: '',
      oldPassword: '',
    };
  },
  computed: {
    passwordMatch() {
      return this.password === this.passwordConfirmation;
    },
  },
  methods: {
    savePassword() {

    },
  },
};
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

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

.danger-btn
  background-color: red
  border-color: red

.frow
  +flex(0, 0)
  width: 100%
  flex-wrap: wrap

.input--medium
  margin: 2%
  flex: 1 0 220px

.input--small
  margin: 2%
  flex: 1 0 160px
</style>
