import {set} from "idb-keyval"
const actions = {
    getTaNaD({commit}){
        commit("getTaNa");
    },
    deleteAllProjjectAndTasks({commit}) {
        var state = store.state;
        state.allProjects.forEach(project => {
            commit("deleteProjectTaske", project);
        })
        state.allProjects = [];
        set('tasks', state.allOfInformation);
        set('projects', state.allProjects);
    }
}

export default actions;