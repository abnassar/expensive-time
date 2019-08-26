<style scoped>
    select {
        background-color: transparent;
        border: rgb(85, 43, 12);
        border-style: solid;
        border-width: .045em;
        width: 11.9em;
        padding: 0px;
        border-radius: 1em;
        outline:none;
        direction: rtl;
        color: rgb(85, 43, 12); 
        font-size: .7em;
        height: 30px;
        top: 15px;
        display: inline-block;
        margin-bottom: auto;
        margin-top: auto
    }
    select option {
        background-color: rgb(179, 127, 97);
        border:  rgb(85, 43, 12);
        color: rgb(85, 43, 12);
        border-style: dashed;
        border-width: .15em;
        border-radius: 20%;
        padding: .35em;
        margin-left: auto;
        margin-right: auto;
        outline:none;
        text-align: center
    }
    footer {
        background-color: rgb(202, 180, 167);
        border: none ;
        border-top: 1px solid rgb(85, 43, 12);
        height: 37px;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        justify-content: space-evenly;
        font-size: .8em;
        text-align: center;
        top: auto;
        bottom: 0;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    span {
        color: rgb(85, 43, 12);
        flex-basis: 25%;
        font-size: 14px;
        margin-top: auto;
        margin-bottom: auto
    }
    button {
        color: rgb(85, 43, 12);
        font-size: 14px;
        background-color: transparent;
        border: none
    }
    @media only screen and (max-width: 600px) {
        span {
            color: rgb(85, 43, 12);
            flex-basis: 25%;
            font-size: 9px;
            margin-top: auto;
            margin-bottom: auto
        }
        button {
            color: rgb(85, 43, 12);
            flex-basis: 25%;
            font-size: 9px;
            margin-top: auto;
            margin-bottom: auto;
            background-color: transparent;
            border: none;
        }
    }
    #about {

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
    #about2 {
        background-color: rgb(202, 180, 167);
        width: 450px;
        border: 2px solid rgb(85, 43, 12);
        border-radius: 10px
    }

    .button_icon{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background-color: rgb(202, 180, 167);
        color: rgb(85, 43, 12);
        border: none;
        outline: none;
        font-size: 30px;
        margin: 10px;
    }
</style>

<template>
    <footer>
        <span ><a href="https://github.com/abnassar">{{_("created")}}</a></span>
        <select v-model="languageLocal">
            <option value="" v-show="0">chose language || اختر لغة</option>
            <option value="ar">العربية</option>
            <option value="en">english</option>
        </select>
        <button @click="showAbout=true">About Time-Expensive</button>
        <div id="about" v-if="showAbout">
            <p id="about2">
                <button id="cancel" class="far fa-times-circle button_icon" @click="showAbout=false"></button><br>
                  This is a great time management program ⏲ written in javaScript, HTML and CSS languages with the VUE framework and modern techniques like PWA, VUEX, VUE-ROUTER, DB-KEYVAL, etc...

                It is created to manage and watch the tasks and the Tasks Duration 💼. We have two languages in this program (Arabic, English). You can enter the task name and details and you can categorize the tasks to project and enter the information of this project 📄 you can add, edit and delete the projects and tasks with intuitive control ✏️.

                It is very easy to use and have nice classic style 👍 you will like it 😄🖤

                If you want to make your time expensive stuff, use Expensive-Time ⭐️            
                </p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            languageLocal: "",
            showAbout: false
        };
    },
    computed: {
        language() {
            return this.$store.state.language;
        },
    },
    watch: {
        languageLocal() {
            this.$store.commit("language", this.languageLocal);
        },
    }
}
</script>
