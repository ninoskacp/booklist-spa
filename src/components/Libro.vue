<template>
  <div class="libro-card">
    <h4>{{ libro.titulo }}</h4>
    <p class="autor">Por: {{ libro.autor }}</p>
    <span class="badge">{{ libro.categoria }}</span>
    
    <div class="acciones">
      <!-- Enlace dinámico para ver el detalle -->
      <router-link :to="'/libro/' + libro.id" class="btn-ver">Ver Detalle</router-link>
      <!-- Emite un evento para avisar al padre que debe eliminar este libro -->
      <button @click="$emit('eliminar', libro.id)" class="btn-eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Libro',
  props: {
    libro: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.libro-card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 6px; background: white; text-align: left; }
.autor { color: #555; font-style: italic; margin: 5px 0; }
.badge { background: #e0e0e0; padding: 4px 8px; border-radius: 4px; font-size: 0.85em; }
.acciones { margin-top: 15px; display: flex; gap: 10px; }
.btn-ver { color: #42b983; text-decoration: none; align-self: center; font-weight: bold; }
.btn-eliminar { background: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px; }
</style>