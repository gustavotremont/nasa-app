import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Landings from "../Landings/Landings";
import Neas from "../Neas/Neas";


function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/landings' element={<Landings/>}/>
        <Route path='/neas' element={<Neas/>}/>   
      </Routes>
    </div>
  )
}

export default Main