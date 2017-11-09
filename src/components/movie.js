import React, {Component } from 'react';
import MovieDetail from './movieDetail';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  findMovie = (term) => {
    if(term){
      this.props.onSearchTermChange(term);
    }
   }
  render(){
    return(
      <div>

        <div className="back" >
          <MovieDetail movie={this.props.movie}/>
        </div>
      </div>
    );
  }
}
export default Movie;
