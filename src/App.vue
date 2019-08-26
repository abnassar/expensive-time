<template>
    <div id="app" >
        <headerT></headerT>
        <router-view v-if="language"></router-view>
        <br>
        <footerT></footerT>
    </div>
</template>

<script>
import headerT from "./components/header/header"
import footerT from "./components/footer/footer"
export default {
    name: 'app',
    components: {
        headerT,
        footerT
    },
    computed:{
        language() {
            return this.$store.state.language
        }
    }
}
</script>

<style>
@font-face {
  font-family: Kitab;
  font-style: normal;
  font-display: block;
  font-weight: 400;
  src: url(https://fonts.nuqayah.com/kitab.woff2) format("woff2"),
    url(https://fonts.nuqayah.com/kitab.woff) format("woff");
}
@font-face {
  font-family: Kitab;
  font-style: normal;
  font-display: block;
  font-weight: 700;
  src: url(https://fonts.nuqayah.com/kitab-b.woff2) format("woff2"),
    url(https://fonts.nuqayah.com/kitab-b.woff) format("woff");
}
body{
    background-color: rgb(202, 180, 167);
    color: rgb(85, 43, 12);
    font-size: 1.5em;
    font-family: Kitab; 
    box-sizing: border-box;
    text-align: inherit;
}
   
</style>
