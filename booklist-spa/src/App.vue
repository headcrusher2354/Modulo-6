<template>
  <div class="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/libros">Libros</router-link>
    </nav>

    <div class="contador">
      <p>Contador: {{ contador }}</p>
      <button @click="incrementar">+</button>
      <button @click="disminuir">-</button>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { contador: 0 }
  },
  methods: {
    incrementar() { this.contador++ },
    disminuir() { this.contador-- }
  }
}
</script>

<style scoped>
.app { font-family: Arial, sans-serif; text-align: center; }
nav { padding: 1rem; background: #eee; }
nav a { margin: 0 0.5rem; text-decoration: none; }
</style>