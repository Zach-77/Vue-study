<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <DemoOne/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DemoOne from './components/DemoOne.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    DemoOne
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
