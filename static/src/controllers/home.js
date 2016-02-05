import Vue from '../../bower_components/vue/dist/vue';

export default {
    ready() {
        componentHandler.upgradeAllRegistered();
    },
    data () {
        return {
           username: '',
           userpass: ''
        }
    },
    methods: {
        login(e) {
            let data = {
                username: this.username,
                userpass: this.userpass
            }
            Vue.http.post('http://localhost:8082/api/login', data)
            .then((res) => {
                localStorage.setItem('token', res.data.user.token);
                window.app.authenticated = true;
            })
            .catch((err) => {
                console.log('Err');
            });
        }
    }
}
