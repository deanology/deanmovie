<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="justify-content-end fixed-top">
      <b-container>
        <b-navbar-brand to="/">Movies</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="mx-0 mx-lg-1 px-0 px-lg-2">
                <router-link to="{name: 'home'}">Home</router-link>
            </b-nav-item>
            <b-nav-item class="mx-0 mx-lg-1 px-0 px-lg-2">
                <router-link to="{name: 'register'}">Register</router-link>
            </b-nav-item>
            <b-nav-item class="mx-0 mx-lg-1 px-0 px-lg-2">
                <router-link to="{ name: 'login'}">Login</router-link>
            </b-nav-item>
            <b-nav-item class="mx-0 mx-lg-1 px-0 px-lg-2">
                <router-link to="{ name: 'student', params: {id: 2}}">Student</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>