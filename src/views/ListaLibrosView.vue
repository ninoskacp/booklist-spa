<template>
  <div>
    <h2>Gestión de Catálogo</h2>

    <!-- Formulario para añadir libros (Lección 3 y 4) -->
    <form @submit.prevent="guardarLibro" class="formulario">
      <h3>Añadir Nuevo Libro</h3>
      
      <div class="campo">
        <label>Título:</label>
        <input v-model="nuevoLibro.titulo" type="text" placeholder="Ej: 100 años de soledad" required />
      </div>

      <div class="campo">
        <label>Autor:</label>
        <input v-model="nuevoLibro.autor" type="text" placeholder="Ej: Gabriel García Márquez" required />
      </div>

      <div class="campo">
        <label>Categoría:</label>
        <select v-model="nuevoLibro.categoria" required>
          <option value="" disabled>Selecciona una opción</option>
          <option value="Ficción">Ficción</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Historia">Historia</option>
          <option value="Romance">Romance</option>
          <option value="Misterio">Misterio</option>
        </select>
      </div>

      <div class="campo">
        <label>Descripción:</label>
        <textarea v-model="nuevoLibro.descripcion" @keyup.enter="guardarLibro" placeholder="Breve resumen..."></textarea>
      </div>

      <button type="submit">Agregar Libro</button>
    </form>

    <!-- Vista previa en tiempo real -->
    <div v-if="nuevoLibro.titulo" class="preview">
      <p><strong>Vista previa:</strong> {{ nuevoLibro.titulo }} <span v-if="nuevoLibro.autor">by {{ nuevoLibro.autor }}</span></p>
    </div>

    <hr />

    <!-- Listado de Libros (Lección 2) -->
    <h3>Listado Actual</h3>
    
    <div v-if="store.libros.length === 0">
      <p>No hay libros disponibles en el catálogo.</p>
    </div>

    <div v-else>
      <!-- Aquí llamamos a nuestro componente hijo pasándole los datos -->
      <Libro 
        v-for="item in store.libros" 
        :key="item.id" 
        :libro="item" 
        @eliminar="borrarLibro"
      />
    </div>
  </div>
</template>

<script>
import Libro from '../components/Libro.vue';
import { bookStore } from '../store/bookStore.js';

export default {
  components: { Libro },
  data() {
    return {
      store: bookStore,
      nuevoLibro: {
        titulo: '',
        autor: '',
        categoria: '',
        descripcion: ''
      }
    };
  },
  methods: {
    guardarLibro() {
      if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor) return;
      
      this.store.agregarLibro(this.nuevoLibro);
      
      // Limpiar el formulario
      this.nuevoLibro = { titulo: '', autor: '', categoria: '', descripcion: '' };
    },
    borrarLibro(id) {
      this.store.eliminarLibro(id);
    }
  }
};
</script>

<style scoped>
.formulario { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: left; }
.campo { margin-bottom: 12px; }
.campo label { display: block; margin-bottom: 4px; font-weight: bold; }
input, select, textarea { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
.preview { background: #eef9f4; padding: 10px; border-left: 4px solid #42b983; margin-bottom: 20px; text-align: left; }
button { background-color: #2c3e50; color: white; padding: 10px 15px; border: none; cursor: pointer; border-radius: 4px; }
button:hover { background-color: #42b983; }
</style>