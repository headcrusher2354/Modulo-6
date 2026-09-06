<template>
  <div class="vista">
    <router-link to="/">Volver al inicio</router-link>
    <h2>Catalogo de libros</h2>

    <FormularioLibro @agregar-libro="agregarLibro" />

    <div v-if="store.libros.length === 0">
      <p>No hay libros disponibles aun </p>
    </div>
    <div v-else>
      <div v-for="libro in store.libros" :key="libro.id" class="fila-libro">
        <Libro :libro="libro" @eliminar="eliminarLibro" :mostrarBoton="true" />
        <router-link :to="`/libros/${libro.id}`">Ver detalle</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Libro from '../components/Libro.vue'
import Formulario from '../components/Formulario.vue'
import { store, agregarLibro, eliminarLibro } from '../data/libros.js'

export default {
  name: 'ListaLibros',
  components: { Libro, Formulario },
  data() {
    return { store }
  },
  methods: {
    agregarLibro,
    eliminarLibro
  }
}
</script>

<style scoped>
.vista { padding: 2rem; }
.fila-libro { margin-bottom: 0.5rem; }
</style>