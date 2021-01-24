<template>
  <div>
    <p>¿Cuál es el objeto de su petición, queja / reclamo o recurso? ¿Cuáles son los hechos en que fundamenta su petición, queja / reclamo o recurso? ¿Cuál es su sugerencia? ¿Cuál es su felicitación?</p>
     <textarea style="width:1000px;height:300px" v-model="complaintText"> </textarea>
     <div style="display: inline-block;">
     
     <div class="text--counter">Contador de caracteres {{textLength}}/2000</div>
     <div class="text--error" v-if="!textValid">No puede enviar un mensaje vacio o con más de 2000 caracteres.</div>

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
      if (this.complaintText !== '' && this.complaintText !== null && this.textLength < 2000)
        return true;
      else
        return false
    },
    textLength() {
      return this.complaintText.length;
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
        const textTruncated = this.truncateText(this.complaintText, 2000);
        const pqrs = await VAPI.post( 
          `/api/pqrs`, 
          { message: textTruncated },
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
    },
    truncateText(text, length) {
      if (text.length <= length) {
        return text;
      }

      return text.substr(0, length);
    }
  },
};
</script>

<style scoped>
.text--error {
  color: rgb(194, 10, 10);
  font-size: 0.9rem;
}

.text--counter {
  color: rgb(78, 76, 76);
  font-size: 0.9rem;
}
</style>
