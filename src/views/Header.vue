<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="justify-content-end">
      <b-container>
        <b-navbar-brand to="/"><i class="fas fa-facebook"></i></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-item class="mx-0 mx-lg-1 px-0 px-lg-2">
                  <router-link to="{name: 'categories'}">Categories</router-link>
              </b-nav-item>
              <b-nav-item class="mx-0 mx-lg-1 px-0 px-lg-2">
                <router-link to="{name: 'featured'}">Featured</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
              <b-nav-form v-on:submit="sortedResult">
                  <b-form-input size="md" class="mx-0 mx-lg-1 px-0 px-lg-2" placeholder="Search"></b-form-input>
                  <b-button size="md" class="mx-0 mx-lg-1 px-0 px-lg-2 search-btn" type="submit">Search</b-button>
              </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
// importing axios for async REST calls
// import axios from 'axios'
export default {
  name: "header",
  props: {
    movies: Array
  },
  data(){
    return{
      sortedResult: []
    }
  },
  mounted(){

  },
  methods: {
    searchText(){
      this.sortedResult = this.movies.filter(
        
      )
      return this.sortedResult;
    }
  }
};
</script>
<style scoped>
  .navbar{
    background-color: #353944;
  }
  .navbar-brand{
    color: #e8e2e1;
  }
  a.nav-link {
    font-size: 16px;
    color: #7e818a !important;
}
  .search-btn, input{
    font-size: 14px;
  }
  .search-btn{
    background-color: #29a348;
    border-color: #29a348;
  }
</style>