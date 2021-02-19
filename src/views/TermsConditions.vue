<template>
  <div class="container" >
      <h1>Términos y condiciones</h1>
      <div class="pdf-container">
        <div>
          <h3>Términos y condiciones Persona Natural</h3>
          <iframe src="https://storage.googleapis.com/thechemcie/Autorizaci%C3%B3n%20protecci%C3%B3n%20y%20uso%20de%20datos%20personas%20naturales.pdf"
              width="95%" height="500px"
              title="Términos y condiciones persona Natural"
          ></iframe>
        </div>
        <div>
          <h3>Términos y condiciones Persona Jurídica</h3>
          <iframe src="https://storage.googleapis.com/thechemcie/Autorizaci%C3%B3n%20protecci%C3%B3n%20y%20uso%20de%20datos%20personas%20jur%C3%ADdicas.pdf"
              width="95%" height="500px"
              title="Términos y condiciones persona jurídica"
          ></iframe>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  
  .pdf-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
      width: 600px;
      min-width: 300px;
      text-align: center;
    }
  }
}
</style>
