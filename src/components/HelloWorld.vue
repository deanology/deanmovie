<template>
  <div class="hello">
    <div class="columns medium-3" v-for="result in results" :key="result">
      <div class="card">
        <div class="card-divider">
          {{ result.title}}
        </div>
         <div class="card-section">
          {{ result.abstract}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      results: [
        {
          title: "the very first post", abstract: "lorem ipsum some test dimpsum"
        },
         {
          title: "and then the second", abstract: "lorem ipsum some test dimpsum"
        },
         {
          title: "third post", abstract: "lorem ipsum some test dimpsum"
        },
         {
          title: "the last post", abstract: "lorem ipsum some test dimpsum"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
