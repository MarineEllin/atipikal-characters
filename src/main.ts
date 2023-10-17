import './assets/base.scss'
import { createApp } from 'vue';
import {createPinia} from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const pinia = createPinia();
const app = createApp(App)

app.use(pinia);
app.use(router);
app.mount('#app')
