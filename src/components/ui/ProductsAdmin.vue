<template>
  <div>
    <DynamicTable :headers="headers" :data="getProductsData"/>
  </div>
</template>

<script>
import DynamicTable from '../shared/DynamicTable.vue';
import VAPI from '../../http_common';

export default {
  data() {
    return {
      headers: ['SKU', 'Nombre', 'Presentación'],
      data: [],
    };
  },
  async created() {
    const res = await VAPI.get('/api/product/allProducts');
    this.data = res.data;
  },
  computed: {
    getProductsData() {
      return this.data.map((product) => ({
        SKU: product.SKU,
        link: product.link,
        Nombre: product.name,
        // eslint-disable-next-line quote-props
        'Presentación': product.capacity,
      }));
    },
  },
  components: {
    DynamicTable,
  },
};
</script>

<style lang="sass" scoped>
</style>
