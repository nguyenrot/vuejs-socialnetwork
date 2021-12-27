import Vue from 'vue'
import App from './App.vue'
import router from "@/router/routes";
import {store} from "./store/store";
import axios from "axios";
import {Vuelidate} from "vuelidate";
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueSweetalert2);
Vue.prototype.axios = axios

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
