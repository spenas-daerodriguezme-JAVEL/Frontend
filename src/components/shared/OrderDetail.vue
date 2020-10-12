<template>
  <div class="container">
    <h1>Orden # </h1>
    <h5>12-08-2020</h5>

    <table>
      <thead>

      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
</template>

<script>
import VAPI from '../../http_common';

export default {

  async created() {
  const parameter = this.$route.params.id;
  const order = await VAPI.get(`/api/order/byId/${parameter}`);
  }
}
</script>

<style lang='sass'>
@import '../../stylesheets/global.sass'
</style>