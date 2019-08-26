<style scoped>
    #ulu{
        text-align: center;
        margin-right: auto;
        margin-left: auto;
        top: 50px;
        border-bottom: none;
        font-size: 0.9em;
    }
    ul{
        margin-top: 2px;
        border-bottom: none;
    }
    div{
        border: none;
        border-bottom: 1px solid rgb(85, 43, 12);
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        color: rgb(202, 180, 167);
        background-color: rgb(85, 43, 12);
    }
    a:hover {
        color: rgb(85, 43, 12);
        background-color: silver
    }
    a.nave-link{
        color: rgb(85, 43, 12)
    }
    a{
        color: rgb(85, 43, 12);
    }

</style>

<template>
<div>
    <ul class="nav nav-pills" id="ulu" >
        <div id="ulu">
            <ul class="nav nav-pills" id="ulu" >
                <li class="nav-item">
                    <a>
                        <router-link class="nav-link" active-class="active" to="/projects">{{_("projects")}}</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a @click="getTaNa">
                        <router-link class="nav-link" active-class="active" to="/" exact>{{_("home")}}</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a @click="getTaNa">
                        <router-link class="nav-link" active-class="active" to="/tasks">{{_("tasks")}}</router-link>
                    </a>      
                </li>
            </ul>
        </div>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            showOrNo: false,
            information: true,
        }
    },
    computed:{
        language() {
            return this.$store.state.language
        }
    },
    methods:{
        showTasks() {
            this.showOrNo = true;
            this.information = false;
            this.$store.commit("showTasks", {
                taske: this.showOrNo,
                information: this.information
                })
        },
        getTaNa() {
            this.$store.dispatch("getTaNaD");
        }
    },
}
</script>
