<template>
  <div>
    <p>¿Cuál es el objeto de su petición, queja / reclamo o recurso? ¿Cuáles son los hechos en que fundamenta su petición, queja / reclamo o recurso? ¿Cuál es su sugerencia? ¿Cuál es su felicitación?</p>
     <textarea style="width:1000px;height:300px" v-model="complaintText"> </textarea>
     <div style="display: inline-block;">

     </div>
      <div class="frow">
          <div class="btn" @click="" style="max-width: 200px; ">Enviar</div>
        </div>
  </div>
</template>

<script>
import VAPI from '../../http_common';

export default {
  data() {
    return {
      complaintText: '',
      loggedIn: false,
    };
  },
  async mounted() {
    //asign to data and ready to send and if not show the fields and do the same thing
    const jwt = localStorage.getItem('jwt');
    // eslint-disable-next-line no-underscore-dangle
    if (jwt) {
      // const jsonJWT = this.parseJwt(jwt);
      // const userId = jsonJWT._id;
      const userInfo = await VAPI.get(`/api/users/me`, { headers: { 'x-auth-token': jwt } });
    }
  },
  methods: {

  },
};
</script>

<style>

</style>
