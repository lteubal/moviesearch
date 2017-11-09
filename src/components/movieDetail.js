import React from 'react';
const MovieDetail = (movie) => {
  if(!movie.movie) {
    return <div></div>;
  }
  let votes = <div></div>;
  if(movie.movie.vote_average > 0) {
    votes = (
      <div className="vote">
        AVERAGE VOTE:<br /><br />
        <div className="active-border">
            <div  className="circle">
                <span className="prec 1">{movie.movie.vote_average}</span>
            </div>
        </div>
      </div>
    );
  }
  const url = `https://image.tmdb.org/t/p/w320/${movie.movie.poster_path}`;
  return (
    <div className="container1">
      <div className="imag">
        <img src={url} alt={movie.movie.title} />
        <div className="release">
          Release Date: {movie.movie.release_date}
        </div>
          {votes}
      </div>

      <div className="details">
        <h1>{movie.movie.original_title}</h1>
        <h3>({movie.movie.title})</h3>
        <p>{movie.movie.overview}</p>

      </div>
    </div>
  );
};

export default MovieDetail;
