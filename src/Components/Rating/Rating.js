import { Rate } from 'antd';
import React from 'react'


//chercher movie par rating
const desc =['terrible','bad','normal','good','wonderful'];
const Rating = ({moviRating,isMovieRating,Rating,setRating}) => {
const handelChange =value => {
  setRating(value);
};
  return (
    isMovieRating ?
    <span className="ratingContent">
      <Rate disabled value={moviRating}/>
    </span>
    :
    <span className="ratingContent">
    <Rate tooltips={desc} onChange={handelChange} value={Rating}/>
    </span>
  )
}

export default Rating