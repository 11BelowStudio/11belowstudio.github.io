import { createApp, configureCompat, h } from 'vue';
import App from './App.vue'
import { createRouter } from './router'

// Vue.config.productionTip = false

configureCompat({
  MODE: 3
})

const router = createRouter();

const app = createApp(App);

app.use(router);

app.mount('#app');


/*
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
*/