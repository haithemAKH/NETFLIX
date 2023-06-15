import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviesData } from '../Constant/Data';

const Trailer = () => {
    //use params
    const { id }= useParams();
    console.log(id);
    
    //utilisation de usestate
    const [data,setData]=useState({});
    //utilisation de useeffect 
    useEffect(()=> {
        const MovieT =moviesData.find((el)=>el.id==id);
        setData(MovieT);
    },[id])
     return (
    <div> 
        <h1 style={{textAlign:'center'}}>TRAILER DU FILM :</h1>
        <iframe src={data.trailer} title='trailer' allowFullScreen width='840px' height='300px'style={{marginTop:'50px',marginLeft:'150px'}}/>
    </div>
  )
}

export default Trailer