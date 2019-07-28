<template>
  <div class="checkout">
    <div class="row">
     <div class="w-30 fix__products center--responsive"
      style="padding: 30px" ref="column">
        <h1 ref="title1" class="title--responsive">Bienvenido</h1>  
      </div>  

      <div class="w-70 pad" ref="column2">
        <h1 ref="title2">Crea tu cuenta</h1>  

        <div class="frow">
          <input-base
            :label="'Nombre'"
            class="input--medium"
            v-model="account.name"></input-base>
          <input-base
            :label="'Apellido'"
            class="input--medium"
            v-model="account.lastname"></input-base>
        </div>

        <div class="frow">
          <input-base
            :label="'Correo'"
            type="email"
            class="input--medium"
            v-model="account.email"></input-base>
          <input-base
            :hasError="!passwordMatch"
            :label="'Contraseña'"
            class="input--medium"
            type="password"
            v-model="account.password"></input-base>
        </div>

        <div class="frow">
          <input-base
            :hasError="!passwordMatch"
            :label="'Confirmar contraseña'"
            class="input--medium"
            type="password"
            v-model="account.passwordConfirmation"></input-base>
        </div>

        <div class="text--error text--right"
          v-if="!passwordMatch">Las contraseñas no coinciden</div>

        <div class="text--error text--right"
          style="margin-top: 10px"
          v-if="userTaken"><b>Existen errores en el formulario:</b> {{ formErrors }}</div>

        <div class="frow">
          <div class="btn"
            @click="register"
            style="max-width: 100px; margin-left: 20px">Regístrate</div>
        </div>
      </div>  

    </div>    

    <modal-info
      useSlot
      autoSize 
      ref="modal">
      <div class="modal__message">
        <div class="title__menu">
          Registro exitoso
        </div>
      </div>
    </modal-info>
  </div>
</template>

<script>
import Cart from '../components/shared/Cart.vue'
import InputBase from '../components/InputBase.vue'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import VAPI from '../http_common';

export default {
  data() {
    return {
      account: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      userTaken: false,
      formErrors: ''
    }
  },
  computed: {
    passwordMatch() {
      return this.account.password == this.account.passwordConfirmation;
    }
  },
  mounted() {
    let title = this.$refs.title1;
    let welcome = this.$refs.title2;
    console.log(this.$refs);
    
    TweenMax

    let tl = new TimelineLite();

    tl
      .from(title, 1.5, {
        x: 100,
        opacity: 0
      })
      .delay(0.1)
      .from(welcome, 0.5, {
        y: 90,
        opacity: 0
      });


    let column = this.$refs.column;
    let column2 = this.$refs.column2;
    let bounds = column.getBoundingClientRect();

    Object.assign([column.style, column2.style], {
      'height': `calc(100vh - ${bounds.top}px)`
    })

  },
  components: { 
    InputBase,
    Cart
  },
  methods: {
    async register() {
      try {
        let modal = this.$refs.modal;
        let data = _.pick(this.account, [
          'name',
          'lastname',
          'password',
          'email'
        ]);

        const res = await VAPI.post('/users', data);

        if (res.status == 201) {
          modal.triggerModal();
          this.userTaken = false;
          this.formErrors = ''

          setTimeout(() => {
            this.$router.push({
              name: 'Landing'
            });
          }, 3000);
        }

      } catch (error) {

        error.response.data.errors.forEach((e, i) => {
          this.formErrors += e + ' ';
        });

        if (error.response.status == 422) {
          this.userTaken = true;
        }
      }

    }
  }
}
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

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
  background: black
  color: white

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

<style lang="scss" scoped>

.fix__products {
  background: $color-black-soft;
}

</style>
