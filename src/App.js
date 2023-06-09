import { useState } from 'react';
import './App.css';
import {moviesData} from "./Constant/Data"
import MovieList from './Components/MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterByNAme from './Components/FilterByName/FilterByNAme';
import FilterByRate from './Components/Rating/Rating';
import AddMovie from './Components/AddMovie/AddMovie';
//mettre le data dans un state 
function App() {
  const[movies,setMovies]=useState(moviesData);
  const[inputSearch,setInputSearch]=useState("");
  const[Rating,setRating]=useState(1);
  const add = (newMovie) => {
    setMovies([...movies,newMovie]);
  }
  return (
    <div className="App">
      <h1><i> App Movie</i></h1>
      <FilterByNAme inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterByRate isMovieRating={false} Rating={Rating} setRating={setRating} />
      {/*envoie du props "movies" vers MovieList*/}
      <MovieList movies={movies} inputSearch={inputSearch} Rating={Rating}/>
      <AddMovie add={add}/>
    </div>
  );
}

export default App;
