BookList - Documento resumen

Que es: El Booklist para la Editorial Nova fue hecha con Vue 3 que permite agregar, listar, ver detalle y eliminar libros, con navegación por rutas.

Decisiones tecnicas:

Vue 3 + Options API, porque la consigna pedía trabajar con data y methods directamente.
Estado compartido entre vistas con reactive() en src/data/libros.js.
Vue Router 4 para las 3 vistas y la ruta dinámica del detalle.

Por leccion:

Introduccion a Vue.js - Componente App.vue con contador reactivo, aplicando el patron MVVM.
Templates y rendering - Componente Libro.vue con v-bind, v-for, v-if/v-else y v-show para mostrar el catalogo.
Formularios - FormularioLibro.vue con v-model en input, select y textarea, y vista previa en tiempo real.
Eventos - @click, .prevent en el submit, .once en un aviso, y @keyup.enter para agregar libros con Enter.
Rutas - Vue Router con /, /libros y /libros/:id (ruta dinamica con props: true), usando router-view en App.vue.

Funcionalidades cubiertas: alta, listado, eliminacion, detalle por ruta dinámica, navegacion entre 3 vistas, componentes reutilizables.
Conclusión: el prototipo cumple los requerimientos y queda listo para escalar (edicion de libros, backend real, autenticacion).
