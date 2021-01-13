<template>
<div>
  <DynamicTable :headers="headers" :data="getUsersData" href="/admin/user" />

</div>
</template>

<script>

import DynamicTable from '../shared/DynamicTable.vue';
import VAPI from '../../http_common';

export default {
  components: {
    DynamicTable,
  },
  data() {
    return {
      data: [],
      headers: ['Usuario', 'Nombre', 'Número de identificación'],
    };
  },
  async created() {
    const jwt = localStorage.getItem('jwt');
    const res = await VAPI.get('/api/users/allUsers',
      { headers: { 'x-auth-token': jwt }}
    );
    this.data = res.data;
  },
  computed: {
    getUsersData() {
      return this.data.map((user) => ({
        Usuario: user.id.toString(),
        link: user.id,
        Nombre: user.name,
        'Número de identificación': user.idNumber.toString(),
      }));
    },
  },
};
</script>

<style lang="sass" scoped>

</style>
