<template>
  <div id="app">
    <!-- <b-nav>
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
    </b-nav>
    <router-view/> -->
     <Header/>
  </div>
</template>

<script>
import Header from './views/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
