import React from 'react'
import Card from 'react-bootstrap/Card';
import MovieRating from '../Rating/Rating';

//acceptation du props "({movie})"envoyé par "MovieList.js" et les charger dans la carte du movie
const MovieCard = ({movie}) => {
  return (
    <div className='movie-card' style={{marginRight:'20px'}}>
      <Card style={{ width: '18rem',margin:'30px auto' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <MovieRating moviRating={movie.rate} isMovieRating={true} />
      </Card.Body>
    </Card>
    </div>
  )
}


export default MovieCard