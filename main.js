import App from './App.vue'
import Vue from 'vue'
import uView from 'uview-ui'
import moment from 'moment';
import api from "@/common/api"
import config from '@/common/config/env.js'
import {
	router,
	RouterMount
} from '@/router'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(router)
Vue.use(uView)
Vue.prototype.$api = api;
Vue.prototype.$config = config;
moment.locale('zh-cn');
Vue.prototype.$moment = moment;

const app = new Vue({
	...App
})

// uview-request
require('@/common/http/request.js')(app)

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount()
// #endif

