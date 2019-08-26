import Vuex from "vuex"
import Vue from "vue"
import {get} from "idb-keyval"
import strings from "../languags/strings.json"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);
let lang = navigator.language.slice(0, 2);
if (!(lang in strings))
    lang = 'en';

const store = new Vuex.Store({
    state:{
        named: "",
        allOfInformation: [],
        showTasks: true,
        showInformation: false,
        allProjects: [],
        language: lang,
        taNaPa: true,
        editingShow: false,
        x: 0,
    },
    mutations,
    actions
});
get('tasks').then(tasks => {
    if (tasks)
        store.state.allOfInformation.push(...tasks);
});
get('projects').then(projects => { 
    if (projects)
        store.state.allProjects.push(...projects);
 });
 get("language").then(language => { 
    if (language)
        store.state.language = language;
 });
 export default store;