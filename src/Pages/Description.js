import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { moviesData } from '../Constant/Data';

// utilisation de 'find' pour afficher la description de chaque film par 'id'

const Description = () => {
    //utilisation de usestate pour y mettre la description dans setDescrip
    const [descrip,setDescrip]=useState({});
    //utilisation de 'id' comme parammetre pour afficher la description
    const{ id } = useParams();
    useEffect (() => {
        const movieD = moviesData.find((el)=>el.id==id);
        setDescrip(movieD);
    }, [id]);
  return (
    <div>
        <h1 style={{textAlign:'center'}}>DESCRIPTION DU FILM :</h1>
        <h3 style={{textAlign:'center' ,marginTop:'200px'}}>  {descrip.description}</h3>
    </div>
  )
}

export default Description