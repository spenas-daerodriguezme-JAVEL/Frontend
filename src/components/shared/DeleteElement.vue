<template>
<div>
         <div class="row">
         <h1>
           ¿Estas seguro de querer eliminar {{title}}? esta acción es irreversible
         </h1>
       </div>
       <div class="row buttons">
         <div
        class="btn btn--save danger-btn"
        @click="deleteElement"
      >Si</div>
        <a
        class="btn btn--save"
        href="/admin"
      >No</a>
       </div>
       <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">{{modalMessage}}</div>
      </div>
    </modal-info>
</div>
</template>

<script>
import VAPI from '../../http_common';
import util from '../../util/index';

export default {
  data() {
    return {
      currentAction: '',
      url: '',
      title: '',
      modalMessage: '',
    };
  },
  beforeMount() {
    this.currentAction = this.$route.meta.actionType;
    const parameter = this.$route.params.id;
    if (this.currentAction === 'Description') {
      this.url = `/api/description/${parameter}`;
      this.title = 'esta descripcion';
    } else if (this.currentAction === 'Product') {
      this.url = `/api/product/${parameter}`;
      this.title = 'este producto';
    }
  },
  methods: {
    async deleteElement() {
      const { modal } = this.$refs;
      const jwt = localStorage.getItem('jwt');
      const jsonJWT = util.parseJwt(jwt);
      // eslint-disable-next-line no-underscore-dangle
      const userId = jsonJWT._id;
      try {
        const deletedElement = await VAPI.delete(this.url, {
          headers: {
            id: userId,
            'x-auth-token': localStorage.getItem('jwt'),
          },
        });
        if (deletedElement.status === 200) {
          this.modalMessage = 'Operacion exitosa';
          modal.triggerModal();
          setTimeout(() => {
            this.$router.push({ name: 'AdminPanel' });
          }, 500);
        }
      } catch (error) {
        this.modalMessage = 'Hubo un error en la operacion';
        modal.triggerModal();
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../../stylesheets/global.sass

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

.buttons
  justify-content: space-around
  margin-left: 300px
  margin-right: 300px

.danger-btn
  background-color: red
  border-color: red
</style>
