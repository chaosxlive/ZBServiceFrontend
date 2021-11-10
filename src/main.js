import {
    createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'ant-design-vue/dist/antd.css';
import {
    BACKEND_URL
} from './zbs-config'

const vueApp = createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')

vueApp.$http.interceptors.response.use(function (response) {
    return response
}, function (error) {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;

        const refresh_token = window.localStorage.getItem('refresh_token');
        return axios.post(BACKEND_URL.APIS.AUTHS.TOKENS.REFRESH, {
                refresh_token
            })
            .then(({
                data
            }) => {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                vueApp.$http.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
                originalRequest.headers['Authorization'] = 'Bearer ' + data.access_token;
                return axios(originalRequest);
            });
    }
})