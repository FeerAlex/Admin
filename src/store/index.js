import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import skills from './modules/skills';
import articles from './modules/articles';
import works from './modules/works';

const store = new Vuex.Store({
    modules: {
        skills,
        articles,
        works
    }
})

export default store