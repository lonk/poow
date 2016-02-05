'use strict';

import '../bower_components/material-design-lite/material.min.css';
import './styles/fixes.css';
import './styles/main.css';

import '../bower_components/material-design-lite/material.min.js';

import Vue from '../bower_components/vue/dist/vue';
import VueRouter from '../bower_components/vue-router/dist/vue-router';
import VueResource from '../bower_components/vue-resource/dist/vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

let auth = (localStorage.getItem('token')) ? true : false;

var root = Vue.extend({
    data: () => {
            return {
                authenticated: auth
            };
    }
});
var router = new VueRouter();

router.map({
    '/': {
        component: view('home')
    },
    '/register': {
        component: view('register')
    },
    '/rooms': {
        component: view('rooms')
    }
});

router.start(root, '#router');
let app = router.app;

function view(name) {
    return function(resolve) {
        require(['./views/' + name + '.vue'], resolve);
    }
};

window.app = app;