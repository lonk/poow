'use strict';

import '../bower_components/material-design-lite/material.min.css';
import './styles/fixes.css';
import './styles/main.css'

import '../bower_components/material-design-lite/material.min.js';

import Vue from '../bower_components/vue/dist/vue';
import VueRouter from '../bower_components/vue-router/dist/vue-router';

Vue.use(VueRouter);
var root = Vue.extend({
    data: () => {
          return {};
    }
});
var router = new VueRouter();

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