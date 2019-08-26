<style scoped>
    .div {
        width: 450px;
        margin: auto;
    }
    @media only screen and (max-width: 600px){
       .div {
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
        direction: rtl
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
    h1{
        text-align: center;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .button_icon{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background-color: rgb(202, 180, 167);
        color: rgb(85, 43, 12);
        border: none
    }
    .english{
        direction: ltr;
        left: 0%;
        right: auto;
        text-align: left
    }
    .colorT{
        color: rgb(59, 29, 7)
    }
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
    input{
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
    input:focus {
        outline:none;
    }

    label{
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

    input:focus ~ label, input:valid ~ label{
        top:-20px;
        font-size:14px;
        color:rgb(85, 43, 12);
        
    }

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
    input:focus ~ .bar:before, input:focus ~ .bar:after {
        width:50%;
    }
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

    input:focus ~ .highlight {
        -webkit-animation:inputHighlighter 0.3s ease;
        -moz-animation:inputHighlighter 0.3s ease;
        animation:inputHighlighter 0.3s ease;
    }

    @-webkit-keyframes inputHighlighter {
        from { background:rgb(85, 43, 12); }
      to    { width:0; background:transparent; }
    }
    @-moz-keyframes inputHighlighter {
        from { background:rgb(85, 43, 12); }
      to    { width:0; background:transparent; }
    }
    @keyframes inputHighlighter {
        from { background:rgb(85, 43, 12); }
      to    { width:0; background:transparent; }
    }
    select{
        background-color: transparent;
        border:  rgb(85, 43, 12);
        border-style: solid;
        border-width: .045em;
        position: relative;
        color: rgb(85, 43, 12);
        width: 12.5em;
        padding: 0px;
        color: rgb(85, 43, 12);
        border-radius: 1em;
        margin-bottom: .3em;
        outline:none;
        direction: rtl;
        color: rgb(139, 109, 87); 

    }
    select option{
        background-color: rgb(179, 127, 97);
        border:  rgb(85, 43, 12);
        border-style: dashed;
        border-width: .11em;
        border-radius: 20%;
        padding: .35em;
        margin-left: auto;
        margin-right: auto;
        outline:none;
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
    #AddPro {
        color: rgb(85, 43, 12);
        font-size: .65em;
        display: block;
        text-align: center;
        margin-left: auto;
        margin-right: auto
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
    #addButton {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: block;
        margin-top: 1.5em;
    }
    #icons {
        text-align: center;
        display: block;
    }
</style>

<template>
    <div>
        <h1 v-if="!(allOfInformation[0])">{{_("noTaske")}}</h1>
        <div id="tasks" class="div">
            <p v-for="task in allOfInformation" :key="task.id" :class="IsEng">
                <span class="colorT">{{_("taskName")}}:</span> {{task.name}} <br>
                <span class="colorT">{{_("taskDetails")}}:</span> {{task.details}} <br>
                <span class="colorT">{{_("project")}}:</span> {{task.currentlyOption}} <br>
                <span class="colorT">{{_("taskDuration")}}:</span> {{task.time}}
                <br>
                <br>
                <span id="icons">
                    <button class="fas fa-trash-alt button_icon"  @click="deletetask(task)"></button>
                    <button class="far fa-edit button_icon"  @click="showE(task)"></button>
                </span>
            </p>
        </div>
        <div id="idetDiv" v-if="editingShow">
            <form id="formstyle" @submit.prevent="editTaske">
                <button id="cancel" class="far fa-times-circle button_icon" @click="cancel"></button>
                <div class="group">      
                    <input :class="IsEng" type="text" v-model="taskName" autocomplete="off" required @input="setNa">
                    <span class="highlight"></span>
                    <span class="bar" ></span>
                    <label :class="IsEng">{{_("taskName")}} .....</label>
                </div>
                <div class="group">      
                    <input :class="IsEng" type="text" v-model="taskDetails" autocomplete="off" required @input="setDe">
                    <span class="highlight"></span>
                    <span class="bar" ></span>
                    <label :class="IsEng">{{_("taskDetails")}} .....</label>
                </div>
                <select v-model="currentlyOption" :class="IsEng">
                    <option value="" v-show="0">{{_("choseProject")}} .....</option>
                    <option v-for="option in allProjects" :key="option.id" :value="option.projectName">{{option.projectName}}</option>
                </select>
                <br>
                <router-link to="/projects" id="AddPro">{{_("addAProject")}}</router-link>
                <br>
                <button type="submit" class="btn btn-outline-dark">{{_("edit")}}</button>    
            </form>
        </div>
        <button @click="deleteAllTasks" id="addButton" class="btn btn-secondary btn-lg" v-if="allOfInformation[0]">{{_("deleteAllTasks")}}</button>
    </div>
</template>

<script>

import {mapState} from "vuex"
import {set, get} from "idb-keyval"
export default {
    data() {
        return {
            currentlyOption: "",
            taskName: "",
            taskDetails: "",
            taskNeedEdit: ""
        }
    },
    computed: {
        ...mapState(["allOfInformation", "language", "taNaPa", "allProjects", "editingShow"]),
               IsEng(){
            return this.language == "en" ? "english":"";
        }
    },
    methods: {
        deletetask(task){
            this.$store.commit("deletetask", task)
        },
        setNa() {
            set("temNa", this.taskName);
        },
        setDe() {
            set("temDe", this.taskDetails);
        },
        showE(task) {
            this.$store.commit("toggel_editingShow");
            this.taskName = "";
            this.taskDetails = "";
            set("temNa", this.taskName);
            set("temDe", this.taskDetails);
            this.taskNeedEdit = task;
            set("taskNeedEdit", this.taskNeedEdit);
            this.$store.commit("saveX", task)
        },
        cancel() {
            this.$store.commit("toggel_editingShow");
        },
        editTaske() {
            this.$store.commit("editTaske", {
                newName: this.taskName,
                newDetails: this.taskDetails,
                newProject: this.currentlyOption
                });
            this.$store.commit("toggel_editingShow");
        },
        deleteAllTasks() {
            let store = this.$store;
            this.$dialog
                .confirm(this._("allTasksWillDeleted")).then(function() {
                    store.commit("deleteAllTasks");
                });
        }
    },
    watch: {
        taNaPa() {
            get("temNa").then(temNa => { 
            if (temNa)
                this.taskName = temNa;
            });
            get("temDe").then(temDe => { 
                if (temDe)
                this.taskDetails = temDe;
            });
            get("taskNeedEdit").then(taskNeedEdit => { 
                if (taskNeedEdit)
                this.taskNeedEdit = taskNeedEdit;
            });
        },
    }
}

</script>

