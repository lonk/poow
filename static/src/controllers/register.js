import Vue from '../../bower_components/vue/dist/vue';

export default {
    ready() {
        componentHandler.upgradeAllRegistered();
    },
    data () {
        return {
           username: '',
           userpass: '',
           userconf: '',
           usermail: '',
           userbio: ''
        }
    },
    methods: {
        register(e) {
            let data = {
                username: this.username,
                userpass: this.userpass,
                userconf: this.userconf,
                usermail: this.usermail,
                userbio: this.userbio
            }
            Vue.http.post('http://localhost:8082/api/register', data)
            .then((res) => {
                console.log('Ok');
            })
            .catch((err) => {
                console.log('Err');
            });
        }
    }
}
