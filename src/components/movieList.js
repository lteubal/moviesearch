import React , { Component } from 'react';
import MovieListItem from './movieListItem';

export default class MovieList extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    console.log(this.props.movies);
    let count = 0;
    let movies = this.props.movies
                .map((movie, index)=> {
                  if(count < 12 && movie.poster_path) {
                      count++;
                      return <MovieListItem onMovieSelect={this.props.onMovieSelect} key={movie.id} movie={movie} />;
                  };
                  return;
                });
    return(
      <div className="movielist">
        {movies}
      </div>
    );
  }
}
