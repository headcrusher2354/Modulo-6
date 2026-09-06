<template>
  <div class="vista">
    <router-link to="/libros">← Volver al catalogo</router-link>

    <div v-if="libro">
      <h2>{{ libro.titulo }}</h2>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoria:</strong> {{ libro.categoria }}</p>
      <p><strong>Descripcion:</strong> {{ libro.descripcion || 'Sin descripcion disponible.' }}</p>
    </div>
    <div v-else>
      <p>Libro no encontrado</p>
    </div>
  </div>
</template>

<script>
import { store } from '../data/libros.js'

export default {
  name: 'DetalleLibro',
  props: ['id'],
  data() {
    return { store }
  },
  computed: {
    libro() {
      return this.store.libros.find(l => l.id === Number(this.id))
    }
  }
}
</script>

<style scoped>
.vista { padding: 2rem; }
</style>