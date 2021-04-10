<template>
  <div :class="viewClass">
    <div class="frow">
      <div v-if="isView">
        <a
          class="btn"
          @click="$router.go(-1)"
          style="max-width: 100px; margin: 2%; margin-bottom: 0px;"
          >Volver</a
        >
      </div>
      <div v-if="!isView">
        Desde aquí podrá modificar la información asociada a su cuenta, tal como el correo al que desea que lo contactemos o sus datos de envío. Para que sus datos queden registrados seleccione el botón guardar una vez haya realizado los cambios deseados.
      </div>
    </div>
    <div v-if="isView" class="frow">
      <h1>Información de usuario</h1>
    </div>
    <div class="frow">
      <input-base :label="'Nombre'" class="input--medium" v-model="user.name"></input-base>
      <input-base :label="'Apellido'" class="input--medium" v-model="user.lastName"></input-base>
    </div>

    <div class="frow">
      <custom-selector
        label="Tipo de Documento"
        class="input--medium"
        v-model="user.identificationType"
        :options="idTypeOptions"
      ></custom-selector>
      <input-base
        :label="'Número de documento'"
        class="input--medium"
        v-model="idNumber"
      ></input-base>
    </div>

    <div class="frow">
      <input-base :label="'Dirección'" class="input--medium" v-model="user.address"></input-base>
      <input-base :label="'Telefono'" class="input--medium" v-model="user.telephone"></input-base>
    </div>
    <div class="frow">
      <input-base
        :label="'Correo electrónico'"
        class="input--medium"
        v-model="user.email"
      ></input-base>
    </div>
    <div class="frow">
      <input-base :label="'Ciudad'" class="input--small" v-model="user.city"></input-base>
      <input-base :label="'Estado'" class="input--small" v-model="user.state"></input-base>
    </div>

    <div class="frow" v-if="!isView">
      <div class="btn" @click="updateUser" style="max-width: 100px; margin-left: 20px;">
        Guardar
      </div>
      <a class="btn" href="/change-password" style="max-width: 200px; margin-left: 20px;"
        >Cambiar Contraseña</a
      >
    </div>
    <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">{{ modalMessage }}</div>
      </div>
    </modal-info>
  </div>
</template>

<script>
import { ID_TYPES } from '../../idTypes';
import util from '../../util/index';

export default {
  props: {
    userId: String,
  },

  data() {
    return {
      user: {
        name: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        identificationType: '',
        identificationNumber: '',
        telephone: '',
        isAdmin: false,
      },
      viewClass: '',
      modalMessage: '',
      idTypeOptions: ['CC', 'NIT'],
    };
  },
  computed: {
    isView() {
      return this.$route.meta.actionType === 'Visualizar';
    },
    idNumber() {
      return String(this.user.identificationNumber);
    },
  },
  async beforeMount() {
    this.idTypeOptions = util.pairLabelValue(ID_TYPES.map((idType) => idType.type));
    const jwt = localStorage.getItem('jwt');
    const jsonJWT = util.parseJwt(jwt);
    // eslint-disable-next-line no-underscore-dangle
    const userId = jsonJWT._id;
    let userInfo;

    if (this.isView) {
      this.viewClass = 'put-paddings';
      const parameter = this.$route.params.id;
      userInfo = await this.$http.get(`/api/users/userByIdBson/${parameter}`, {
        headers: {
          id: userId,
          'x-auth-token': localStorage.getItem('jwt'),
        },
      });
    } else {
      userInfo = await this.$http.get('/api/users/me', {
        headers: {
          id: userId,
          'x-auth-token': localStorage.getItem('jwt'),
        },
      });
    }

    delete userInfo.data._id;
    delete userInfo.data.__v;
    this.user = userInfo.data;
  },

  methods: {
    async updateUser() {
      const { modal } = this.$refs;
      try {
        const response = await this.$http.put('/api/users/', this.user, {
          headers: {
            'x-auth-token': localStorage.getItem('jwt'),
          },
        });
        if (response.status === 200) {
          this.modalMessage = 'Operación exitosa';
          modal.triggerModal();
        }
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
@import '../../stylesheets/global.sass'

.input--medium
  margin: 2%
  flex: 1 0 220px

.input--small
  margin: 2%
  flex: 1 0 160px

.frow
  +flex(0, 0)
  width: 100%
  flex-wrap: wrap

.put-paddings
  padding: 60px
</style>
