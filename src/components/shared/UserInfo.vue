/* eslint-disable no-underscore-dangle */
<template>
<div>
        <div class="frow">
          <input-base :label="'Nombre'" class="input--medium" v-model="name"></input-base>
          <input-base :label="'Apellido'" class="input--medium" v-model="lastName"></input-base>
        </div>

        <div class="frow">
          <custom-selector
            label="Tipo de Documento"
            class="input-base input--small"
            v-model="idType"
            :options="idTypeOptions"
          ></custom-selector>
          <input-base :label="'Número de documento'" class="input--medium" v-model="idNumber"></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Correo electrónico'" class="input--medium" v-model="email"></input-base>
          <input-base :label="'Dirección'" class="input--medium" v-model="address"></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Ciudad'" class="input--small" v-model="city"></input-base>
          <input-base :label="'Estado'" class="input--small" v-model="state"></input-base>
        </div>

        <div class="frow" v-if="!isAdmin">
          <div class="btn" @click="" style="max-width: 100px; margin-left: 20px">Guardar</div>
          <div class="btn" @click="" style="max-width: 200px; margin-left: 20px">Cambiar Contraseña</div>
        </div>
      </div>
</div>

</template>

<script>
import { ID_TYPES } from '../../idTypes';
import util from '../../util/index';
import VAPI from '../../http_common';

export default {

  props: {
    userId: String,
  },

  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      idNumber: '',
      address: '',
      city: '',
      state: '',
      idType: '',
      idTypeOptions: ['CC', 'NIT'],
      isAdmin: false,
    };
  },
  async beforeMount() {
    this.idTypeOptions = util.pairLabelValue(
      ID_TYPES.map((idType) => idType.type),
    );
    let userInfo;
    if (this.$route.meta.actionType === 'Visualizar') {
      const parameter = this.$route.params.id;
      userInfo = await VAPI.get(`/api/users/${parameter}`);
      this.isAdmin = true;
    } else {
      const jwt = localStorage.getItem('jwt');
      const jsonJWT = this.parseJwt(jwt);
      // eslint-disable-next-line no-underscore-dangle
      const userId = jsonJWT._id;
      userInfo = await VAPI.get(`/api/users/${userId}`);
    }

    userInfo = userInfo.data;
    this.name = userInfo.name;
    this.lastName = userInfo.lastName;
    this.email = userInfo.email;
    this.idNumber = userInfo.identificationNumber.toString();
    this.address = userInfo.address;
    this.city = userInfo.city;
    this.state = userInfo.state;
    this.idType = userInfo.identificationType;
  },

  methods: {
    parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join(''),
      );

      return JSON.parse(jsonPayload);
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
</style>
