<template>
  <div class="vista">
    <h1>BookList</h1>
    <p>Bienvenido al gestor de libros de la Editorial Nova.</p>
    <router-link to="/libros">
      <button>Ver catalogo de libros</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'InicioView'
}
</script>

<style scoped>
.vista { text-align: center; padding: 2rem; }
button { padding: 0.6rem 1.2rem; cursor: pointer; }
</style>