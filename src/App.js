import React, { useState, useEffect } from 'react';

import { supabase } from './client'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import './App.css';
import{Show} from "./pages/show"
import{Insert} from "./pages/insert"
import{Content2} from "./pages/content2"
import{Update} from "./pages/Update"
import{Home} from "./pages/Home"
function App() {
 

  const reload= ()=>
  {
      window.location.reload();
  }




  return(
    
  <div className='App' >
    
         <Router>
      <div>
      <div className='left'> 
        <h1 onClick={reload}> <Link to="/">Home</Link></h1>
        <h2> <Link to="/insert">Create Creator</Link> </h2>
       <h2><Link to="/show"> Creators Gallery</Link></h2> 
    
        </div>
  
     </div>
      <Routes>
      

      <Route path="/show" element={<Show/>} />
      <Route path="/insert" element={<Insert/>} />
      <Route path="/home/:id" element={<Content2/>} />
      <Route path="/update/:id" element={<Update/>} />
      <Route path="/" element={<Home/>} />
      </Routes>
   
    </Router>



  </div>)


}

export default App;
