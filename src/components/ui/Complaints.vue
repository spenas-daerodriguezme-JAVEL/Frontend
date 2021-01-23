<template>
  <div>
    <p>¿Cuál es el objeto de su petición, queja / reclamo o recurso? ¿Cuáles son los hechos en que fundamenta su petición, queja / reclamo o recurso? ¿Cuál es su sugerencia? ¿Cuál es su felicitación?</p>
     <textarea style="width:1000px;height:300px" v-model="complaintText"> </textarea>
     <div style="display: inline-block;">
     
     <div class="text--error" v-if="!textValid">No puede enviar un mensaje vacio.</div>

     </div>
      <div class="frow">
        <div class="btn" @click="sendComplaint" style="max-width: 200px; ">Enviar</div>
      </div>

      <modal-info useSlot autoSize ref="modal">
        <div class="modal__message">
          <div class="title__menu">{{ modalMsg }}</div>
        </div>
      </modal-info>
  </div>
</template>

<script>
import VAPI from '../../http_common';

export default {
  data() {
    return {
      complaintText: '',
      loggedIn: false,
      modalMsg: '',
    };
  },  
  computed: {
    textValid() {
      return this.complaintText !== '' && this.complaintText !== null;
    }
  },
  methods: {
    async sendComplaint() {
      if ( !this.textValid ) {
        return ;
      }      
      const { modal } = this.$refs;
      const jwt = localStorage.getItem('jwt');
      try {
        const pqrs = await VAPI.post( 
          `/api/pqrs`, 
          { message: this.complaintText },
          { headers: { 'x-auth-token': jwt }}
        );
        this.modalMsg = 'Envio exitoso'
        modal.triggerModal();
        this.resetState();
      }
      catch( error ) {
        this.modalMsg = 'Algo salió mal intentelo nuevamente.'
        modal.triggerModal();
      }
    },
    resetState() {
      this.complaintText = '';
    }
  },
};
</script>

<style scoped>
.text--error {
  color: red;
}

</style>
