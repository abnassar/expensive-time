<style scoped>
    .btn-outline-dark:hover{
        background-color: rgb(85, 43, 12);
        border-color: rgb(85, 43, 12);
        color: rgb(202, 180, 167);
    } 
    .btn-outline-dark{
        color: rgb(85, 43, 12);
        border-color: rgb(85, 43, 12);
    }
    .btn{
        margin: .55em;
    }
    .group{ 
        position:relative; 
        margin-bottom: 2.7em;
    }
    .input{
        font-size:18px;
        padding:10px 10px 10px 5px;
        display:inline-block;
        width:300px;
        border:none;
        border-bottom:1px solid rgb(85, 43, 12);
        background: transparent;
        color: rgb(85, 43, 12);
        direction: rtl
    }
    .input:focus {
        outline:none;
    }

    /* LABEL ======================================= */
    .label{
        color: rgb(139, 109, 87); 
        font-size:18px;
        font-weight:normal;
        position:absolute;
        right: 0% ;
        display: block;
        pointer-events:none;
        top:10px;
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
        direction: rtl;
    }

    /* active state */
    .input:focus ~ label, .input:valid ~ .label{
        top:-20px;
        font-size:14px;
        color:rgb(85, 43, 12);
        
    }

    /* BOTTOM BARS ================================= */
    .bar{
        display:block;
        right: 40.2% ; 
        width:300px;
        
    }
    .bar:before, .bar:after{
        content:'';
        height:2.5px; 
        width:0;
        position:absolute;
        background:rgb(85, 43, 12); 
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
    }
    .bar:before {
        left:50%;
    }
    .bar:after {
        right:50%; 
    }

    /* active state */
    .input:focus ~ .bar:before, .input:focus ~ .bar:after {
        width:50%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
        position:absolute;
        right: 0% ;
        display: block;
        height:60%; 
        width:100px; 
        top:25%; 
        pointer-events:none;
        opacity:0.5;
        direction: rtl
    }

    /* active state */
    .input:focus ~ .highlight {
        -webkit-animation:inputHighlighter 0.3s ease;
        -moz-animation:inputHighlighter 0.3s ease;
        animation:inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @keyframes inputHighlighter {
        from { background:rgb(85, 43, 12); }
      to    { width:0; background:transparent; }
    }
    #informationOfTask{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display:block;
        width: 300px;
        margin-top: 3em;
    }
    #div {
        width: 450px;
        margin: auto;
    }
    @media only screen and (max-width: 600px){
       #div {
            width: 280px;
            margin: auto;
        } 
    }
    p {
        border-top: 2px dashed;
        border-color: rgb(85, 43, 12) !important;
        margin:0; padding: 30px;
        counter-increment: section;
        position: relative;
        direction: rtl;
    }
    p:nth-child(even):before {
        content: counter(section);
        right: 100%; 
        margin-right: -20px;
        position: absolute;
        border-radius: 50%;
        padding: 3px;
        height: 53px;
        width: 50px;
        background-color: rgb(85, 43, 12);
        text-align:center;
        color: rgb(202, 180, 167);
        font-size: 110%;
    }
    p:nth-child(odd):before {
        content: counter(section);
        left: 100%; 
        margin-left: -20px;
        position: absolute;
        border-radius: 50%;
        padding: 3px;
        height: 53px;
        width: 50px;
        background-color: rgb(85, 43, 12);
        text-align:center;
        color: rgb(202, 180, 167);
        font-size: 110%;
    }
    @media only screen and (max-width: 600px) {
        p:nth-child(even):before {
            content: counter(section);
            right: 100%; 
            margin-right: -20px;
            position: absolute;
            border-radius: 50%;
            padding: 9px;
            height: 53px;
            width: 50px;
            background-color: rgb(85, 43, 12);
            text-align:center;
            color: rgb(202, 180, 167);
            font-size: 110%;
        }
        p:nth-child(odd):before {
            content: counter(section);
            left: 100%; 
            margin-left: -20px;
            position: absolute;
            border-radius: 50%;
            padding: 9px;
            height: 53px;
            width: 50px;
            background-color: rgb(85, 43, 12);
            text-align:center;
            color: rgb(202, 180, 167);
            font-size: 110%;

        }
    }
    
    p:nth-child(even) {
        border-left: 2px dashed;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        margin-right: 30px; 
        padding-right: 0;
    }

    p:nth-child(odd) {
        border-right: 2px dashed;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        margin-left: 30px; 
        padding-left: 0;
    }

    p:first-child {
        border-top: 0;
        border-top-right-radius:0;
        border-top-left-radius:0;
    }

    p:last-child {
        border-bottom-right-radius:0;
        border-bottom-left-radius:0;
    }
    #button_before{
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background-color: rgb(202, 180, 167);
        color: rgb(85, 43, 12);
        border: none;
        margin-top: -1em
    }
    router-link{
        color: rgb(85, 43, 12)
    }
    #between{
        background-color: rgb(85, 43, 12);
        height: .06em;
        margin-top: 2em;
        margin-bottom: 2em;
        width: 75%;
    }
    h1 {
        text-align: center
    }
    a.router-link-active {
        color: rgb(85, 43, 12)
    }
    .english {
        direction: ltr;
        left: 0%;
        right: auto;
        text-align: left
    }
    .colorT {
        color: rgb(59, 29, 7)
    }
    ul {
        margin-top: 15px;
        margin-bottom: 15px;
        list-style: none;
        border-bottom: 4px solid rgb(59, 29, 7);
        border-top: 4px solid rgb(59, 29, 7);
        padding-top: 8px;
    }
    li {
        border-bottom: 1px solid rgb(59, 29, 7);

    }
    .inputt {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }
    #accordion {
        text-align: inherit;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 388px;
        background-color: rgb(117, 62, 22);
        color: rgb(202, 180, 167);
        border: none;
        border-radius: 3px;
        margin-bottom: -17px;
        outline: none;
    }
    @media only screen and (max-width: 600px) {
        #accordion {
        text-align: inherit;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 218px;
        background-color: rgb(117, 62, 22);
        color: rgb(202, 180, 167);
        border: none;
        border-radius: 3px;
        margin-bottom: -17px;
        outline: none;
    }
    }
    #addButton {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: block;
        margin-top: 1.5em;
    }
    .btn-secondary:hover {
        color: rgb(85, 43, 12);
        background-color: rgb(202, 180, 167);
        border-color: rgb(85, 43, 12);
    }
    .btn-secondary {
        color: rgb(202, 180, 167);
        background-color:rgb(85, 43, 12);
        border-color: rgb(51, 26, 7);
    }
    #icons {
        text-align: center;
        display: block;
    }
    .button_icon{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background-color: rgb(202, 180, 167);
        color: rgb(85, 43, 12);
        border: none;
        outline: none
    }
    #idetDiv {
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
        position: fixed;
        background: #131212db;
        opacity: 2;
        top: 0;
        margin: 0;
        z-index: 1;
    }
    #formstyle {
        background-color: rgb(202, 180, 167);
        padding: 10px;
        border: 3px solid rgb(85, 43, 12);
        border-radius: 20px
    }
    #cancel {
        margin-bottom: 10px
    }
</style>

<template>
    <div>
        <div>
            <form id="informationOfTask" @submit.prevent="addProject">
                <div class="group">      
                    <input :class="IsEng" class="input" type="text" v-model="projectName" autocomplete="off" required>
                    <span class="highlight"></span>
                    <span class="bar" ></span>
                    <label class="label" :class="IsEng">{{_("project_name")}} .....</label>
                </div>
                <div class="group">      
                    <input :class="IsEng" class="input" type="text" v-model="projectDetails" autocomplete="off" required>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label class="label" :class="IsEng">{{_("projectDetails")}} .....</label>
                </div>
                <button type="submit" class="btn btn-outline-dark btnCol">{{_("addProject")}}</button>
            </form>
            <hr id="between">
            <div id="div">
                <h1 v-if="!allProjects[0]">{{_("noProject")}}</h1>
                <p v-for="project in allProjects" :key="project.id" :class="IsEng">
                    <span class="colorT">{{_("project_name")}}:</span> {{project.projectName}} <br>
                    <span class="colorT">{{_("projectDetails")}}:</span> {{project.projectDetails}} <br>
                    <br>
                    <span id="icons">
                        <button class="fas fa-trash-alt button_icon"  @click="deleteProject(project)"></button>
                        <button class="far fa-edit button_icon"  @click="showE(project)"></button>
                    </span>
                    <button @click="accordion(project)" :class="IsEng" id="accordion">{{_("projectTasks")}}</button>
                    <span v-if="project.showProjectTasks" class="tab-content">
                        <ul>
                            <li v-for="task in allOfInformation.filter(t => t.currentlyOption==project.projectName)" :key="task.id">
                                <span class="colorT">{{_("taskName")}}:</span> {{task.name}} <br>
                                <span class="colorT">{{_("taskDetails")}}:</span> {{task.details}} <br>
                                <span class="colorT">{{_("taskDuration")}}:</span> {{task.time}}
                            </li> 
                            <h3 v-if="!allOfInformation.filter(t => t.currentlyOption==project.projectName).length">{{_("noProjectTask")}}</h3>
                        </ul>   
                    </span> 
                </p>
                <button @click="deleteAllProjjectAndTasks" id="addButton" class="btn btn-secondary btn-lg" v-if="allProjects[0]">{{_("deleteAllProjectAndTask")}}</button>
            </div>
        </div>
        <div id="idetDiv" v-if="editProSho">
                <form id="formstyle" @submit.prevent="editProject">
                    <button id="cancel" class="far fa-times-circle button_icon" @click="cancel"></button>
                    <div class="group">      
                        <input :class="IsEng" class="input" type="text" v-model="projectNameE" autocomplete="off" required>
                        <span class="highlight"></span>
                        <span class="bar" ></span>
                        <label class="label" :class="IsEng">{{_("project_name")}} .....</label>
                    </div>
                    <div class="group">      
                        <input class="input" :class="IsEng" type="text" v-model="projectDetailsE" autocomplete="off" required>
                        <span class="highlight"></span>
                        <span class="bar" ></span>
                        <label class="label" :class="IsEng">{{_("projectDetails")}} .....</label>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-outline-dark">{{_("edit")}}</button>    
                </form>
            </div>   
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            projectName: "",
            projectDetails: "",
            projectNameE: "",
            projectDetailsE: "",
            showOrNo: false,
            showProjectTasks: false,
            noTasks: true,
            editProSho: false,
            projectNeedEdit: ""
        }
    },
    computed:{
        ...mapState(["allProjects", "language", "allOfInformation",]),
        IsEng(){
            return this.language == "en" ? "english" : "";
        }
    },
    methods:{
        addProject(){
            this.$store.commit("addProject", {
                name: this.projectName,
                details: this.projectDetails,
                showProjectTasks: this.showProjectTasks,
                noTasks: this.noTasks
            })
            this.projectName = "";
            this.projectDetails = "";
        },
        deleteProject(project) {
            let store = this.$store;
            this.$dialog
                .confirm(this._("deleteSure"))
                .then(function() {
                    store.commit("deleteProject", project);
                })
        },
        deleteAllProjjectAndTasks() {
            let store = this.$store;
            this.$dialog
                .confirm(this._("allProjectAndTasksWillDeleted")).then(function() {
                    store.dispatch("deleteAllProjjectAndTasks");
                });
        },
        accordion(project) {
            project.showProjectTasks = !project.showProjectTasks;
        },
        showE(project) {
            this.editProSho = true;
            this.projectNameE = "";
            this.projectDetailsE = "";
            this.projectNeedEdit = project;
        },
        editProject() {
            this.$store.commit("editProject", {
                projectNeedEdit: this.projectNeedEdit,
                newName: this.projectNameE,
                newDetails: this.projectDetailsE,
                });
            this.editProSho = false;
        },
        cancel() {
            this.editProSho = false;
        }
    },
}
</script>

