import Vue from '../../bower_components/vue/dist/vue';

export default {
    ready() {
        localStorage.removeItem('token');
        this.$root.authenticated = false;
        Vue.http.headers.common['Authorization'] = undefined;
        this.$root.router.go('/');
    }
}