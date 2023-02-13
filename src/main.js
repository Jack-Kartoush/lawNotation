import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import NavScroll from 'navscroll';

const Vue = createApp(App);
// Vue.component('navscroll', NavScroll);
// Vue.use(NavScroll);
Vue.mount('#app');
