<template>
  <div class="detalle" v-if="libroEncontrado">
    <h2>Detalle del Libro</h2>
    <div class="card-detalle">
      <h1>{{ libroEncontrado.titulo }}</h1>
      <h3>Autor: {{ libroEncontrado.autor }}</h3>
      <p><strong>Categoría:</strong> {{ libroEncontrado.categoria }}</p>
      <p><strong>Descripción:</strong> {{ libroEncontrado.descripcion || 'Sin descripción disponible.' }}</p>
    </div>
    <router-link to="/libros" class="volver">← Volver al catálogo</router-link>
  </div>
  <div v-else>
    <p>El libro solicitado no existe.</p>
    <router-link to="/libros">Volver a la lista</router-link>
  </div>
</template>

<script>
import { bookStore } from '../store/bookStore.js';

export default {
  props: ['id'],
  data() {
    return {
      store: bookStore
    };
  },
  computed: {
    libroEncontrado() {
      return this.store.libros.find(l => l.id === Number(this.id));
    }
  }
};
</script>

<style scoped>
.card-detalle { background: #fdfdfd; padding: 25px; border: 1px solid #eaeaea; border-radius: 8px; margin: 20px 0; }
.volver { display: inline-block; margin-top: 15px; color: #42b983; text-decoration: none; }
</style>