import React from 'react'
import './App.css'



export default function Movies({movieList}) //we are destructing prop no need of prop.movieList or const {movieList}=prop;
 {
  return (
    <div>
        {
           movieList &&  movieList.map((movie)=>(
                <div className="movie-container" key={movie.imdbID}>
                    <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
                        <h1 className="movie-title">{movie.Title}</h1>
                        <p className="movie-year">Released: {movie.Year}</p>
                </div>
            ))
        }

    </div>
  )
}
