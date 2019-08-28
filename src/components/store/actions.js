import {set} from "idb-keyval"
import store from "./store"
const actions = {
    getTaNaD(context){
        context.commit("getTaNa");
    },
    deleteAllProjjectAndTasks(context) {
        var state = store.state;
        state.allProjects.forEach(project => {
            context.commit("deleteProjectTaske", project);
        })
        state.allProjects = [];
        set('tasks', state.allOfInformation);
        set('projects', state.allProjects);
    }
}

export default actions;