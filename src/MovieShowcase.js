import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    // Keys is the samething as props (properties) 
    // Objets are referred to as state in react, 
    

    // By using the spread operator we 
    return movieData.map(movie => <MovieCard poster={movie.poster} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres}/>)

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
