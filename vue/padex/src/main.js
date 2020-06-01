import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false
new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')