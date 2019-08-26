import {set} from "idb-keyval"
const mutations = {
    getInformation(state, payload) {
        state.allOfInformation.push({ 
            name: payload.taskName,
            details: payload.taskDetails,
            /*
            hour: payload.hours,
            minute: payload.minutes,
            second: payload.seconds,
            */
            time: payload.time,
            currentlyOption: payload.currentlyOption
        });
        set('tasks', state.allOfInformation);
    },
    deletetask(state, x) {
        state.allOfInformation.splice(state.allOfInformation.indexOf(x), 1);
        set('tasks', state.allOfInformation);
    },
    showTasks(state, payload) {
        state.showTasks = payload.taske;
        state.showInformation = payload.information;
    },
    addProject(state, payload) {
        state.allProjects.push({
            projectName: payload.name,
            projectDetails: payload.details,
            showProjectTasks: payload.showProjectTasks,
            noTasks: payload.noTasks
        });
        set('projects', state.allProjects);
    },
    deleteProject(state, x) {
        const to_delete = [];
        state.allOfInformation.forEach((task, i) => {
            if (task.currentlyOption === x.projectName)
                to_delete.push(i);
        });
        to_delete.reverse().forEach(del_i => {
            state.allOfInformation.splice(del_i, 1);
        });
        state.allProjects.splice(state.allProjects.indexOf(x), 1);
        set('tasks', state.allOfInformation);
        set('projects', state.allProjects);
    },
    language(state, languageLocal) {
        state.language = languageLocal;
        set("language", state.language);
    },
    getTaNa(state) {
        state.taNaPa = !state.taNaPa;
    },
    toggel_editingShow(state) {
        state.editingShow = !state.editingShow;
    },
    saveX(state, taske) {
        state.x = state.allOfInformation.indexOf(taske);
    },
    editTaske(state, payload) {
        state.allOfInformation[state.x].name = payload.newName;
        state.allOfInformation[state.x].details = payload.newDetails;
        state.allOfInformation[state.x].currentlyOption = payload.newProject;
        set('tasks', state.allOfInformation);
    },
    editProject(state, payload) {
        let x = state.allProjects.indexOf(payload.projectNeedEdit);
        state.allProjects[x].projectName = payload.newName;
        state.allProjects[x].projectDetails = payload.newDetails;
        set('projects', state.allProjects);
    },
    deleteAllTasks(state) {
        state.allOfInformation = [];
        set('tasks', state.allOfInformation);
    },
    deleteProjectTaske(state, x) {
        const to_delete = [];
        state.allOfInformation.forEach((task, i) => {
            if (task.currentlyOption === x.projectName)
                to_delete.push(i);
        });
        to_delete.reverse().forEach(del_i => {
            state.allOfInformation.splice(del_i, 1);
        });
    },
}

export default mutations;