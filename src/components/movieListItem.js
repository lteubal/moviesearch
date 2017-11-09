import React , { Component } from 'react';

export default class MovieListItem extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    const url = `https://image.tmdb.org/t/p/w160/${this.props.movie.poster_path}`;
    return(
      <div className="thumb" >
        <img onClick={() => this.props.onMovieSelect(this.props.movie)} src={url} alt={this.props.movie.title} />
      </div>
    );
  }
}
