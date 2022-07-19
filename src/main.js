import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

let app = createApp(App);
app.use(SimpleTypeahead);
app.use(store);
app.use(router);
app.mount('#app');

createApp(App).use(store).use(router).mount('#app')
