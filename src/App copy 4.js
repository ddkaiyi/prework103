import React, { useState, useEffect,createContext } from 'react';
import axios, { Axios } from 'axios';
// import moment from 'moment';
// import Text from './components/Text'
import{Home} from "./pages/home"
import{Menu} from "./pages/Menu"
import{Contact} from "./pages/Contact"
import './App.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import{QueryClient,QueryClientProvider} from "@tanstack/react-query"


export const AppContext=createContext();

function App() {
  const client=new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }});

  return(
<div>
  <QueryClientProvider client={client}>
 
<Router>
  <div>
    <Link to="/menu/1">Menu</Link>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    </div>
<Routes>
<Route path="/menu/:id" element={<Menu/>}/>
<Route path="/" element={<Home />}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
</Router>

</QueryClientProvider>
  </div>)


}

export default App;