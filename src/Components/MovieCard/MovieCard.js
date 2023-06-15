import React from 'react'
import Card from 'react-bootstrap/Card';
import MovieRating from '../Rating/Rating';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//acceptation du props "({movie})"envoyé par "MovieList.js" et les charger dans la carte du movie
const MovieCard = ({movie}) => {
  const navigate=useNavigate();
  return (
    <div className='movie-card' style={{marginRight:'20px'}}>
      <Card style={{ width: '18rem' ,margin:'30px auto' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Button onClick={()=>navigate(`/Description/${movie.id}`)} variant="primary" size="lg" active style={{marginRight : '2px'}}>
        Dscription
      </Button>
      <Button onClick={()=>navigate(`/Trailer/${movie.id}`)}variant="primary" size="lg" active style={{marginLeft:'2px'}}>
        Trailer
      </Button>
        <MovieRating moviRating={movie.rate} isMovieRating={true} />
      </Card.Body>
    </Card>
    </div>
  )
}


export default MovieCard