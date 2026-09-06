<template>
  <div class="libro-card" v-if="libro">
    <h3>{{ libro.titulo }}</h3>
    <p>Autor: {{ libro.autor }}</p>
    <p>Categoría: <span v-bind:class="claseCategoria">{{ libro.categoria }}</span></p>

    <button v-show="mostrarBoton" @click="$emit('eliminar', libro.id)">
      Eliminar
    </button>
  </div>
</template>

<script>
export default {
  name: 'Libro',
  props: {
    libro: {
      type: Object,
      required: true
    },
    mostrarBoton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    claseCategoria() {
      return `categoria-${this.libro.categoria.toLowerCase()}`
    }
  }
}
</script>

<style scoped>
.libro-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
  text-align: left;
}
button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>