import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import SearchBar from './components/searchBar';

import Movie from './components/movie';
import MovieList from './components/movieList';

const apikey = 'f485b849c9ca697111e819b2aeb7dd9a';
const mdb = require('moviedb')(apikey);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      poster: "",
      movies: [],
      selectedMovie: null
    };
    this.findMovie = this.findMovie.bind(this);
  }

  findMovie(query) {
    if(query) {
      let myPromise = new Promise((resolve, reject) => {
        mdb.searchMovie({ query: query }, (err, res) => {
          if(res) { resolve(res) }
          if(err) { reject(err) }
        })
      });
      myPromise.then((res)=> {
        if(res.results[0]) {
          this.setState({
                          selectedMovie: res.results[0],
                          movies: res.results,
                          poster: res.results[0].backdrop_path,
                        });
        } else {
          this.state = {
            poster: "",
            movies: [],
            selectedMovie: null
          };
        }

      })
    }
  }
  render() {
    const findMovie = debounce(query => { this.findMovie(query) }, 1000);
    const imgUrl = "https://image.tmdb.org/t/p/w1280/"+this.state.poster;
    const backg = {
            backgroundImage: `url(${imgUrl})`
          };
     return (
        <div className="App" style={backg}>
          <SearchBar onSearchTermChange={this.findMovie}/>
          <Movie movie={this.state.selectedMovie} onSearchTermChange={findMovie}/>
          <MovieList onMovieSelect={(selectedMovie, poster)=> this.setState({selectedMovie, poster: selectedMovie.backdrop_path})}
                    movies={this.state.movies} />
        </div>
    );
  }
}

export default App;
