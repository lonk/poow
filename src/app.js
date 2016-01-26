'use strict';

import '../bower_components/material-design-lite/material.min.css';
import './styles/fixes.css';

import '../bower_components/material-design-lite/material.min.js';

import Vue from '../bower_components/vue/dist/vue';
import VueRouter from '../bower_components/vue-router/dist/vue-router';

Vue.use(VueRouter);

let app = new Vue({
    el: '#main'
});

var root = Vue.extend({});
var router = new VueRouter();

var home = Vue.extend({
    template: '<p>Accueil</p>'
});

var login = Vue.extend({
    template: '<p>Connexion</p>'
});

var rooms = Vue.extend({
    template: '<p>Salles</p>'
});

router.map({
	'/': {
        component: view('home')
    },
    '/login': {
        component: view('login')
    },
	'/rooms': {
        component: view('rooms')
    }
})

router.start(root, '#router');


function view(name) {
    return function(resolve) {
        require(['./views/' + name + '.vue'], resolve);
    }
};