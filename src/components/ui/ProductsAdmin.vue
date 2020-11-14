/* eslint-disable quote-props */
<template>
  <div>
  <router-link class="btn" :to="'/admin/product/'" style="max-width: 140px">Crear producto</router-link>
    <DynamicTable :headers="headers" :data="getProductsData" href="/admin/product"/>
  </div>
</template>

<script>
import DynamicTable from '../shared/DynamicTable.vue';
import VAPI from '../../http_common';

export default {
  data() {
    return {
      headers: ['SKU', 'Nombre', 'Presentación', 'Posición'],
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
        // eslint-disable-next-line quote-props
        'Posición': product.position.toString(),
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
