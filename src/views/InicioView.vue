<template>
  <div class="inicio">
    <h1>📚 ¡Bienvenido a BookList SPA!</h1>
    <p>Gestiona tu biblioteca digital de forma interactiva</p>
    
    <div class="contador-box">
      <h3>Contador de Visitas Interactivo:</h3>
      <p>Has hecho clic {{ contador }} veces</p>
      <button @click="incrementar">Incrementar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    }
  }
};
</script>

<style scoped>
.inicio { text-align: center; margin-top: 50px; }
.contador-box { margin-top: 30px; padding: 20px; border: 1px dashed #ccc; display: inline-block; }
button { padding: 8px 16px; background-color: #42b983; color: white; border: none; cursor: pointer; }
</style>