import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
//acceptation du props envoyé du App.js "({movies})"
const MovieList = ({movies,inputSearch,Rating}) => {
  return (
    <div className='movie-list'>
        {/* maping movies et envoyé chaque "movie"comme props vers MovieCard */}
{
movies
.filter(movie=>movie.title.toUpperCase().includes(inputSearch.toUpperCase())
&& movie.rate>= Rating
)
.map((movie)=> <MovieCard movie ={movie} key = {movie.id}/>)
}
    </div>
  )
}

export default MovieList