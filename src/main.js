import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixin from './mixin';

createApp(App).mixin(mixin).use(store).use(router).mount('#app');
