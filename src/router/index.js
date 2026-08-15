import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import ListaLibrosView from '../views/ListaLibrosView.vue';
import DetalleLibroView from '../views/DetalleLibroView.vue';

const routes = [
  { path: '/', name: 'Inicio', component: InicioView },
  { path: '/libros', name: 'ListaLibros', component: ListaLibrosView },
  { path: '/libro/:id', name: 'DetalleLibro', component: DetalleLibroView, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;