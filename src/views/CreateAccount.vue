<template>
  <div class="checkout">
    <div class="row">
      <div class="w-30 fix__products center--responsive" style="padding: 30px" ref="column">
        <h1 ref="title1" class="title--responsive">Bienvenido</h1>
      </div>

      <div class="w-70 pad" ref="column2">
        <h1 ref="title2">Crea tu cuenta</h1>

        <div class="frow">
             <input-base
                v-model="account.name"
                :label="'Nombre'"
                class="input--medium"
            ></input-base>
            <input-base
                v-model="account.lastname"
                :label="'Apellido'"
                class="input--medium"
            ></input-base>
        </div>

        <div class="frow">
          <input-base
            :label="'Correo'"
            type="email"
            class="input--medium"
            v-model="account.email"></input-base>
          <input-base
            :label="'Cedula o NIT'"
            type="email"
            class="input--medium"
            v-model="account.cedula"></input-base>
        </div>

        <div class="frow">
          <input-base
            :hasError="!passwordMatch"
            :label="'Contraseña'"
            class="input--medium"
            type="password"
            v-model="account.password"
          ></input-base>
          <input-base
            :hasError="!passwordMatch"
            :label="'Confirmar contraseña'"
            class="input--medium"
            type="password"
            v-model="account.passwordConfirmation"
          ></input-base>
        </div>

        <div class="frow">
          <input-base
            :hasError="!passwordMatch"
            :label="'Teléfono'"
            class="input--medium"
            type="text"
            v-model="account.telephone"
          ></input-base>
          <input-base
            :label="'Dirección'"
            class="input--medium"
            v-model="account.address"
          ></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Estado"
            class="input-base input--medium"
            v-model="account.state"
            :options="stateOptions"
          ></custom-selector>
        </div>

        <div class="frow">
          <custom-selector
            label="Ciudad"
            class="input-base input--medium"
            v-model="account.city"
            :options="cityOptions"
          ></custom-selector>
        </div>

        <div class="text--error text--right" v-if="!passwordMatch">Las contraseñas no coinciden</div>

        <div class="text--error text--right" style="margin-top: 10px" v-if="userTaken">
          <b>Existen errores en el formulario:</b>
          {{ formErrors }}
        </div>

        <div class="frow">
          <div class="btn" @click="register" style="max-width: 100px; margin-left: 20px">Regístrate</div>
        </div>
      </div>
    </div>

    <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">Registro exitoso</div>
      </div>
    </modal-info>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import VAPI from '../http_common';
import Cart from '../components/shared/Cart.vue';
import InputBase from '../components/InputBase.vue';
import { STATES } from '../colombia';
import util from '../util/index';

export default {
    data() {
        return {
            account: {
                name: 'Daniel',
                lastname: 'Rodiruge',
                email: 'dlsxsp@gmail.com',
                password: 'Daniel96',
                passwordConfirmation: 'Daniel96',
                state: 'Amazonas',
                city: 'Leticia',
                address: 'asdasda',
                telephone: '12353445',
                cedula: '10435423',
            },
            // account: {
            //   name: "",
            //   lastname: "",
            //   email: "",
            //   password: "",
            //   passwordConfirmation: "",
            //   state: "",
            //   city: "",
            //   address: "",
            //   telephone: ""
            // },
            userTaken: false,
            formErrors: '',
            stateOptions: [],
        };
    },
    computed: {
        passwordMatch() {
            return this.account.password == this.account.passwordConfirmation;
        },
        cityOptions() {
            if (this.account.state != '') {
                return util.pairLabelValue(
                    STATES.find((state) => state.departamento === this.account.state).ciudades,
                );
            }

            return [{ value: '', label: '' }];
        },
    },
    beforeMount() {
        this.stateOptions = util.pairLabelValue(
            STATES.map((state) => state.departamento),
        );
    },
    mounted() {
        const title = this.$refs.title1;
        const welcome = this.$refs.title2;
        console.log(this.$refs);

        const tl = new TimelineLite();

        tl.from(title, 1.5, {
            x: 100,
            opacity: 0,
        })
            .delay(0.1)
            .from(welcome, 0.5, {
                y: 90,
                opacity: 0,
            });

        const { column } = this.$refs;
        const { column2 } = this.$refs;
        const bounds = column.getBoundingClientRect();

        Object.assign([column.style, column2.style], {
            height: `calc(100vh - ${bounds.top}px)`,
        });
    },
    components: {
        InputBase,
        Cart,
    },
    methods: {
        async register() {
            try {
                const { modal } = this.$refs;
                const data = _.omit(this.account, ['passwordConfirmation']);

                const res = await VAPI.post('/api/users', data);
                localStorage.setItem('id', res.data._id);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('token', res.data.token);

                if (res.status == 200) {
                    modal.triggerModal();
                    this.userTaken = false;
                    this.formErrors = '';

                    setTimeout(() => {
                        this.$router.push({
                            name: 'Landing',
                        });
                    }, 3000);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

.label
  width: 100px

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
