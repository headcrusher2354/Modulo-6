<template>
  <form class="formulario" @submit.prevent="enviarFormulario">
    <h3>Añadir nuevo libro</h3>

    <div class="campo">
      <label for="titulo">Titulo</label>
      <input
        id="titulo"
        type="text"
        v-model="nuevoLibro.titulo"
        placeholder="Ej: La Odisea"
        @keyup.enter="enviarFormulario"
      />
    </div>

    <div class="campo">
      <label for="autor">Autor</label>
      <input
        id="autor"
        type="text"
        v-model="nuevoLibro.autor"
        placeholder="Ej: Sylvia Plath"
      />
    </div>

    <div class="campo">
      <label for="categoria">Categoria</label>
      <select id="categoria" v-model="nuevoLibro.categoria">
        <option disabled value="">Elige una categoria</option>
        <option>Novela</option>
        <option>Ensayo</option>
        <option>Poesía</option>
        <option>Ciencia Ficcion</option>
        <option>Infantil</option>
      </select>
    </div>

    <div class="campo">
      <label for="descripcion">Descripcion</label>
      <textarea
        id="descripcion"
        v-model="nuevoLibro.descripcion"
        placeholder="Resumen del Libro"
      ></textarea>
    </div>

    <button type="submit">Agregar libro</button>

    
    <div class="preview" v-if="nuevoLibro.titulo || nuevoLibro.autor">
      <p><strong>Vista previa:</strong></p>
      <p>{{ nuevoLibro.titulo || '(sin título)' }} — {{ nuevoLibro.autor || '(sin autor)' }}</p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormularioLibro',
  data() {
    return {
      nuevoLibro: {
        titulo: '',
        autor: '',
        categoria: '',
        descripcion: ''
      }
    }
  },
  methods: {
    enviarFormulario() {
      if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor || !this.nuevoLibro.categoria) {
        alert('Por favor completá al menos título, autor y categoría.')
        return
      }

      this.$emit('agregar-libro', { ...this.nuevoLibro, id: Date.now() })

      
      this.nuevoLibro = { titulo: '', autor: '', categoria: '', descripcion: '' }
    }
  }
}
</script>

<style scoped>
.formulario {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  text-align: left;
  max-width: 400px;
}
.campo {
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
}
input, select, textarea {
  padding: 0.4rem;
  margin-top: 0.2rem;
}
button {
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
.preview {
  margin-top: 1rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>