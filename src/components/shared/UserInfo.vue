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
          <input-base label="Número de documento" class="input--medium" v-model="idNumber"></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Correo electrónico'" class="input--medium" v-model="email"></input-base>
          <input-base :label="'Dirección'" class="input--medium" v-model="address"></input-base>
        </div>

        <div class="frow">
          <input-base :label="'Ciudad'" class="input--small" v-model="city"></input-base>
          <input-base :label="'Estado'" class="input--small" v-model="state"></input-base>
          <input-base :label="'País'" class="input--small" v-model="country"></input-base>
        </div>

        <div class="frow">
          <div class="btn" @click="register" style="max-width: 100px; margin-left: 20px">Guardar</div>
          <div class="btn" @click="register" style="max-width: 200px; margin-left: 20px">Cambiar Contraseña</div>
        </div>
      </div>
</div>

</template>

<script>
import { ID_TYPES } from '../../idTypes';
import util from '../../util/index';

export default {

  data() {
    return {
      name: 'Santiago',
      lastName: 'Pena Sanabria',
      email: 'spenas@unal.edu.co',
      idNumber: 101540234,
      address: 'Cll 60 # 20 - 45',
      city: 'Bogota',
      state: 'Bogota',
      country: 'Colombia',
      idType: 'CC',
      idTypeOptions: ['CC', 'NIT'],
    };
  },
  beforeMount() {
    this.idTypeOptions = util.pairLabelValue(
      ID_TYPES.map((idType) => idType.type),
    );
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
