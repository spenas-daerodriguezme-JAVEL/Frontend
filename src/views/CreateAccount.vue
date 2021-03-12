<template>
  <div class="checkout">
    <div class="row">
      <div class="w-30 fix__products center--responsive" style="padding: 30px;" ref="column">
        <h1 ref="title1" class="title--responsive">Bienvenido</h1>
      </div>

      <div class="w-70 pad" ref="column2">
        <h1 ref="title2">Crea tu cuenta</h1>

        <LoadingAnimation v-show="isCreatingAccount"/>

        <div class="frow">
          <input-base v-model="account.name" label="Nombre" class="input--medium"></input-base>
          <input-base
            v-model="account.lastName"
            label="Apellido"
            class="input--medium"
          ></input-base>
        </div>

        <div class="frow">
          <input-base
            label="Correo"
            type="email"
            class="input--medium"
            v-model="account.email"
          ></input-base>
          <custom-selector
            label="Tipo de Documento"
            class="input-base input--medium"
            v-model="account.identificationType"
            :options="idTypeOptions"
          ></custom-selector>
          <input-base
            label="Número de documento"
            type="email"
            class="input--medium"
            v-model="account.identificationNumber"
          ></input-base>
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
            :label="'Teléfono'"
            class="input--medium"
            type="text"
            v-model="account.telephone"
          ></input-base>
          <input-base
            label="Dirección"
            class="input--medium"
            v-model="account.address"
          ></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Departamento"
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

        <div class="text--error text--right" v-if="!passwordMatch">
          Las contraseñas no coinciden
        </div>

        <div class="text--error text--left" style="margin-top: 10px;" v-if="userTaken">
          <b>Existen errores en el formulario:</b>
          <ul>
            <li v-for="(error, index) in formErrors" :key="index">{{ error }}</li>
          </ul>
        </div>

        <div class="frow">
          <div style="margin-left: 20px;">
            <input
              type="checkbox"
              name="termsAndConditions"
              v-model="isTermsAndConditionsAccepted"
            />
            <label for="termsAndConditions"
              >Al marcar este campo aceptas
              <router-link :to="{ name: 'TermsConditions' }" target="_blank">
                los terminos y condiciones
              </router-link>
              y
              <router-link :to="{ name: 'TermsConditions' }" target="_blank">
                la politica de tratamiento de datos </router-link
              >.
            </label>
          </div>
        </div>

        <div class="frow">
          <div
            class="btn"
            @click="register"
            style="max-width: 100px; margin-left: 20px;"
            v-if="isTermsAndConditionsAccepted"
          >
            Regístrate
          </div>
        </div>
      </div>
    </div>

    <modal-info useSlot autoSize ref="modal" :duration="3000">
      <div class="modal__message">
        <div class="title__menu">{{ modalMsg }}</div>
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
import { ID_TYPES } from '../idTypes';
import { EventBus } from '../components/shared/event-bus';
import Loading from './Loading.vue';

export default {
  data() {
    return {
      account: {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        city: '',
        state: '',
        address: '',
        identificationType: '',
        identificationNumber: '',
        password: '',
        passwordConfirmation: '',
      },
      userTaken: false,
      formErrors: '',
      stateOptions: [],
      idTypeOptions: [],
      isTermsAndConditionsAccepted: false,
      modalMsg: '',
      isCreatingAccount: false,
    };
  },
  computed: {
    passwordMatch() {
      return this.account.password === this.account.passwordConfirmation;
    },
    cityOptions() {
      if (this.account.state !== '') {
        return util.pairLabelValue(
          STATES.find((state) => state.departamento === this.account.state).ciudades,
        );
      }

      return [{ value: '', label: '' }];
    },
  },
  beforeMount() {
    this.stateOptions = util.pairLabelValue(STATES.map((state) => state.departamento));
    this.idTypeOptions = util.pairLabelValue(ID_TYPES.map((idType) => idType.type));
  },
  mounted() {
    const title = this.$refs.title1;
    const welcome = this.$refs.title2;

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
    LoadingAnimation: Loading,
  },
  methods: {
    async register() {
      const { modal } = this.$refs;

      this.formErrors = this.validateInfo();
      if (this.formErrors.length > 0) {
        this.userTaken = true;
        this.modalMsg = 'Existen errores en el formulario';
        modal.triggerModal();
        return;
      }
      if (!this.passwordMatch) {
        return;
      }
      this.isCreatingAccount = true;
      try {
        const data = _.omit(this.account, ['passwordConfirmation']);

        const res = await VAPI.post('/api/users', data);

        localStorage.setItem('id', res.data._id);
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('jwt', res.data.token);

        if (res.status === 200) {
          EventBus.$emit('changed-logged-status', 'logged-in');
          this.modalMsg = 'Registro exitoso';
          modal.triggerModal();
          this.userTaken = false;
          this.formErrors = '';

          setTimeout(() => {
            this.$router.push({
              name: 'Catalog',
            });
          }, 3000);
        }
      } catch (error) {
        if (error.response.status === 400) {
          this.modalMsg = 'Uno o más campos no son válidos';
        } else if (error.response.status === 406) {
          const { data } = error.response;
          if (data.key === 'email') {
            this.modalMsg = 'El correo suministrado ya se encuentra en uso';
          } else {
            this.modalMsg = 'El documento suministrado ya se encuentra en uso';
          }
        } else {
          this.modalMsg = 'Hubo un problema. Intenta nuevamente o contactanos.';
          console.error(error);
        }
        modal.triggerModal();
      }
      this.isCreatingAccount = false;
    },
    validateInfo() {
      const errors = [];
      if (this.account.name.length < 2 || this.account.name.length > 50) {
        errors.push('El nombre debe ser de mínimo 2 caracteres y máximo 50 caracteres');
      }
      if (this.account.lastName.length < 2 || this.account.lastName.length > 50) {
        errors.push('El apellido debe ser de mínimo 2 caracteres y máximo 50 caracteres');
      }
      if (this.account.email.length < 5 || this.account.email.length > 255) {
        errors.push('El correo debe ser de mínimo 5 caracteres y máximo 255 caracteres');
      }
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(String(this.account.email).toLocaleLowerCase())) {
        errors.push('El correo ingresado no es válido');
      }
      if (this.account.password.length < 5 || this.account.password.length > 255) {
        errors.push('La contraseña debe ser de mínimo 5 caracteres y máximo 255 caracteres');
      }
      if (this.account.telephone.length < 7) {
        errors.push('El teléfono debe ser de mínimo 7 números');
      }
      if (!this.account.identificationType) {
        errors.push('El tipo de documento es obligatorio');
      }
      if (this.account.identificationNumber.length < 7) {
        errors.push('El número de documento debe ser de mínimo 7 números');
      }
      if (isNaN(this.account.identificationNumber)) {
        errors.push('El número de documento solo puede contener números');
      }
      if (!this.account.state) {
        errors.push('El estado es obligatorio');
      }
      if (!this.account.city) {
        errors.push('La ciudad es obligatoria');
      }
      if (!this.account.address) {
        errors.push('La dirrección es obligatoria');
      }
      return errors;
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
