<template>
  <div>
    <section class="display-movie padding">
      <b-container>
        <b-row>
          <b-col class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5 mb-lg-0 mt-3" v-for="movie in movies" :key="movie.id">
            <img :src="movie.poster_path" alt="Image" />
            <div class="article-body">
              <div class="title">
                <h5><a href="#">{{ movie.title }}</a></h5>
              </div>
              <div class="text">
                <p class="movie-overview">{{ movie.overview}}</p>
              </div>
              <div class="links">
                <b-button href="#" variant="success" size="sm" class="mr-1 trailer-btn">Trailer</b-button>
                <b-button href="#" variant="success" size="sm" class="details-btn">Details</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "index",
  data(){
    return {
      movies: []
    }
  },
  methods: {
    getMovies(){
      axios.
      get('https://api.themoviedb.org/3/movie/popular?api_key=28741ec72a0631da6ac9fa8e406a43ae')
      .then((response) =>{
        this.movies = response.data.results;
        return this.movies;
      })
      .catch((error) =>{
        console.log(error)
      })
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>
<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
}
.trailer-btn,
.details-btn {
  background-color: #017cff;
  border-color: #017cff;
}
.text .movie-overview{
  max-width: 400px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
}
.text {
  margin-bottom: 10px;
  color: #c0c5c5;
  font-size: 14px;
}
.article-body{
  color: #fdfdf8;
  /* color: #212022; */
  padding: 1.25rem;
  box-shadow: 0 10px 10px #212022;
  border-radius: 5px;
}
</style>