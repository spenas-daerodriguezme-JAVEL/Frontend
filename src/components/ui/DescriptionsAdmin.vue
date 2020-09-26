<template>
<div>
  <DynamicTable :headers="headers" :data="getDescriptionData" href="/admin/description"/>
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
      headers: ['Id', 'Aspecto Físico', 'Olor', 'Color'],
    };
  },
  async created() {
    const res = await VAPI.get('/api/description/allDescriptions');
    this.data = res.data;
  },
  computed: {
    getDescriptionData() {
      return this.data.map((description) => ({
        Id: description.id.toString(),
        link: description.id.toString(),
        'Aspecto Físico': description.physicalAspect,
        Olor: description.smell,
        Color: description.color,
      }));
    },
  },
};
</script>

<style lang="sass" scoped>

</style>
