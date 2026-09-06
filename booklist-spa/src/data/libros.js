import { reactive } from 'vue'

export const store = reactive({
  libros: [
    { id: 1, titulo: 'Elantris', autor: 'Brandon Sanderson', categoria: 'Novela', descripcion: 'Una raza maldita condenada a la exclusion' },
    { id: 2, titulo: 'Alturas de Macchu Picchu', autor: 'Pablo Neruda', categoria: 'Poemas', descripcion: 'Poema sobre las ruinas incas.' }
  ]
})

export function agregarLibro(libro) {
  store.libros.push(libro)
}

export function eliminarLibro(id) {
  store.libros = store.libros.filter(libro => libro.id !== id)
}