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
                console.log('Ok');
            })
            .catch((err) => {
                console.log('Err');
            });
        }
    }
}
