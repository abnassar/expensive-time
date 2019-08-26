<template>
    <div >
        <br>
        <timer></timer>
        <br>
        <hr id="between" v-if="showTasks">
        <allOfTasks v-if="showTasks" ></allOfTasks>
    </div>
</template>

<script>
import timer from "../timer/timer"
import allOfTasks from "../allOfTasks/allOfTasks"
export default {
    components:{
        timer,
        allOfTasks
    },
    computed:{
        showTasks(){
            return this.$store.state.showTasks;
        }
    }
}
</script>

<style scoped>
    #between{
        background-color: rgb(85, 43, 12);
        height: .06em;
        margin-top: -2em;
        margin-bottom: 2em;
        text-align: center;
        width: 75%;
    }
</style>


