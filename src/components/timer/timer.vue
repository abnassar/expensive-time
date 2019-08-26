<style scoped>
    #timer{
        width: 300px;
        margin-top: 60px;
        font-weight: 200;
        display: block;
        border: rgb(85, 43, 12);
        border-style:solid;
        border-width: .11em;
        border-radius: 20%;
        padding: .35em;
        margin-left: auto;
        margin-right: auto;
        text-align: center
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
    #addButton {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: block;
        margin-top: 1.5em;
        margin-bottom: -1.5em
    }
    #informationOfTask {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display:block;
        width: 300px;
        margin-top: 3em;
    }
    #AddPro {
        color: rgb(85, 43, 12);
        font-size: .65em;
    }
    .marbut {
        margin-top: 2.5em
    }
    #controlButtons {
        text-align: center;
        margin-left: auto;
        margin-right: auto
    }
    .temporaryInformation {
        display: block;
        list-style: none;
        margin-left: auto;
        margin-right: auto;
        text-align: right;
        direction: rtl;
        width: 350px;
    }

    .english{
        direction: ltr;
        left: 0%;
        right: auto;
        text-align: left
    }
</style>

<template>
    <div id="temp">
        <div>
            <button @click="addNewTask" id="addButton" class="btn btn-secondary btn-lg" v-if="showTasks && !showTimer">{{_("addNewTask")}}</button>
            <div v-if="showTimer && totalSeconds">
                <h1 id="timer">
                    {{timer_display}}
                </h1>
                <ul class="temporaryInformation" :class="IsEng">
                    <li>{{_("taskName")}}: {{taskName}}</li>
                    <li>{{_("taskDetails")}}: {{taskDetails}}</li>
                    <li>{{_("project")}}: {{currentlyOption}}</li>
                </ul>
                <div id="controlButtons">
                    <button @click="cancel"  class="btn btn-outline-dark btnCol">{{_("cancel")}}</button>
                    <button @click="finish" class="btn btn-outline-dark">{{_("finish")}}</button>
                    <button @click="stop" class="btn btn-outline-dark" v-if="togglButton">{{_("stop")}}</button>
                    <button @click="continuee" class="btn btn-outline-dark" v-if="!togglButton">{{_("continue")}}</button>
                </div>
            </div>
            <div id="informationOfTask">
                <form v-if="showInformation">
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
                        <option :value="_('noProjectToThisTaske')">{{_("noProjectToThisTaske")}}</option>
                        <option v-for="option in options" :key="option.id" :value="option.projectName">{{option.projectName}}</option>
                    </select>
                    <br>
                    <router-link to="/projects" id="AddPro">{{_("addAProject")}}</router-link>
                    <br>
                    <button @click="start" class="btn btn-outline-dark marbut">{{_("start")}}</button>
                    <button @click="cancel"  class="btn btn-outline-dark btnCol marbut">{{_("cancel")}}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import {set, get} from "idb-keyval"
import { setInterval } from 'timers';
const fmt_time = s => (new Date(s * 1000).toISOString().substr(10, 9)).replace(/T(00:)?/, '');

export default {
    data() {
        return{
            totalSeconds: 0,
            startSwitch: true,
            stopSwitch: true,
            taskName: "",
            taskDetails: "",
            currentlyOption: "",
            showTimer: false,
            showTaskslocal: true,
            togglButton: true,
            showInformationLocal: false,
        }
    },
    computed: {
        timer_display() {
            return fmt_time(this.totalSeconds);
        },
        options() {
            return this.$store.state.allProjects;
        },
        IsEng() {
            return this.language == "en" ? "english" : "";
        },
        ...mapState(["language", "showInformation", "showTasks", "taNaPa"]),

    },
    methods: {
        setNa() {
            set("temNa", this.taskName);
        },
        setDe() {
            set("temDe", this.taskDetails);
        },
        addNewTask() {
            this.showInformationLocal = true;
            this.showTaskslocal = false;
            this.showTimer = false;
            this.$store.commit("showTasks", {
                taske: this.showTaskslocal,
                information: this.showInformationLocal
                });
            this.taskName = "";
            this.taskDetails = "";
            set("temNa", this.taskName);
            set("temDe", this.taskDetails);
        },
        start(){
            this.stopSwitch = true;
            if (this.startSwitch) {
                this.totalSeconds ++;
                this.showTimer = true;
                this.showTaskslocal = true;
                this.showInformationLocal = false;
                this.startSwitch = false;
                this.$store.commit("showTasks", {
                    taske: this.showTaskslocal,
                    information: this.showInformationLocal
                });
                setInterval(() => {
                    if(this.stopSwitch)
                        this.totalSeconds++;
                }, 1000);
            }
        },
        stop(){
            this.stopSwitch = false;
            this.startSwitch = true;
            this.togglButton = false;
        },
        continuee(){
            this.start();
            this.togglButton = true;
        },
        finish(){
            if (this.totalSeconds) {
                this.addFunction();
                this.totalSeconds = 0;
                this.currentlyOption = "";
                this.stopSwitch = false;
                this.startSwitch = true;
                this.togglButton = true;
            }
        },
        addFunction() {
            if (!this.timer_display)
                return;
            this.$store.commit("getInformation", {
                time: this.timer_display,
                taskName: this.taskName,
                taskDetails: this.taskDetails,
                currentlyOption: this.currentlyOption
            });
            this.taskName = "";
            this.taskDetails = "";
            set("temNa", this.taskName);
            set("temDe", this.taskDetails);
        },
        cancel() {
            this.totalSeconds = 0;
            this.taskName = "";
            this.taskDetails = "";
            set("temNa", this.taskName);
            set("temDe", this.taskDetails);
            this.stopSwitch = false;
            this.currentlyOption = "";
            this.showTaskslocal = true;
            this.togglButton = true;
            this.showInformationLocal = false;
            this.$store.commit("showTasks", {
                taske: this.showTaskslocal,
                information: this.showInformationLocal
            });
        },
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
        }
    }
}

</script>
