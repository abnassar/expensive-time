
import Vue from 'vue'
import App from './App.vue'
import store from './components/store/store'
import VueRouter from 'vue-router'
import routes from './routes'
import strings from './components/languags/strings.json'
import VuejsDialog from 'vuejs-dialog'
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VuejsDialog);

const router = new VueRouter({
    base: "/expensive-time/",
    routes,
})

Vue.prototype._ =  function(str) {
    return strings[this.$store.state.language][str];
}

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
