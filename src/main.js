import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa automáticamente tu index.js de la carpeta router

const app = createApp(App);

app.use(router); // Habilita el enrutador en tu aplicación

app.mount('#app');