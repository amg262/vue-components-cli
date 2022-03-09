<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-universe msg="Welcome to Your Vue.js App"/>
    <universal-library></universal-library>

  </div>
</template>

<script>
import HelloUniverse from './components/HelloWorld.vue'
import UniversalLibrary from "@/components/UniversalLibrary";

export default {
  name: 'App',
  components: {
    HelloUniverse,
    UniversalLibrary
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
