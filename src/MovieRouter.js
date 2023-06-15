import React from 'react'
import Navb from './Pages/Navb'
import { Route, Routes } from 'react-router-dom'
import  App  from './App'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import Error from './Pages/Error'
import Trailer from './Pages/Trailer'
import Description from './Pages/Description'
// utilisation de react router
const MovieRouter = () => {
  return (
    <div>
        <Navb/>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/Home' element={<Home/>}/>
            <Route path='/Contact-Us' element={<ContactUs/>}/>
            <Route path='/*' element={<Error/>}/>
            <Route path='/About-Us' element={<AboutUs/>}/>
            <Route path='/Trailer/:id' element={<Trailer/>}/>
            <Route path='/Description/:id' element={<Description/>}/>
        </Routes>
    </div>
  )
}

export default MovieRouter