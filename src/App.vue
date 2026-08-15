<template>
  <div id="app">
    <!-- Navbar para cambiar entre vistas -->
    <nav class="navbar">
      <router-link to="/">Inicio</router-link> | 
      <router-link to="/libros">Lista de Libros</router-link>
    </nav>
    
    <!-- El espacio donde Vue Router renderiza las vistas dinámicamente -->
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.navbar { padding: 20px; background-color: #f5f5f5; text-align: center; margin-bottom: 20px; border-bottom: 1px solid #ddd; }
.navbar a { margin: 0 10px; font-weight: bold; color: #2c3e50; text-decoration: none; }
.navbar a.router-link-exact-active { color: #42b983; }
.content { padding: 20px; max-width: 800px; margin: 0 auto; font-family: sans-serif; text-align: center; }
</style>