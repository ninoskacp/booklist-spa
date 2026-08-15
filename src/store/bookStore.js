import { reactive } from 'vue';

export const bookStore = reactive({
  libros: [
    { id: 1, titulo: 'Romper el círculo', autor: 'Colleen Hoover', categoria: 'Romance', descripcion: 'Explora el amor, la violencia doméstica y la difícil decisión de romper patrones dañinos en las relaciones.' },
    { id: 2, titulo: 'La chica del tren', autor: 'Paula Hawkins', categoria: 'Misterio', descripcion: 'Es un thriller psicológico de intriga, que sigue a Rachel, una mujer atrapada en su rutina y en un misterio que observa desde el tren.' }
  ],
  agregarLibro(nuevoLibro) {
    this.libros.push({
      id: Date.now(), // Genera un ID único con la hora actual
      ...nuevoLibro
    });
  },
  eliminarLibro(id) {
    this.libros = this.libros.filter(libro => libro.id !== id);
  }
});