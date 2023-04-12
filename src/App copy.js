import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import moment from 'moment';
import { BarChart, Bar,  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

import{Contact} from "./pages/Contact"
import{Content} from "./pages/Content"
import './App.css';

function App() {
  const [data,Setdata]=useState([]);
  const[sdate,Setsdate]=useState(null);
  const[newdata,Setnewdata]=useState(null);

  const fetchData=()=>{
    axios.get("https://api.weatherbit.io/v2.0/forecast/daily?city=newyork&key=140c7c8c5afc490a813c2666df9c4c50").then((res)=>{
         Setdata(res.data)
    
    })}
    useEffect(()=>{
      fetchData();
  
    },[]);
//     Setdata1(data.data)
console.log(data.data)
const search=()=>{
  Setnewdata(data.data?.filter((item)=>item.datetime== sdate));
  console.log(sdate)
  console.log(newdata);
}
// console.log(newdata?"a":"b")
const reload= ()=>
{
    window.location.reload();
}
const date=Date(data?.data?.[0]?.moonrise_ts * 1000);

  return(
    
  <div className='App'>
     <Router>
      <div>
     {/* <Link to="/home/1">Home</Link> */}
     {/* <Link to="/">page</Link> */}
     </div>
      <Routes>
      
      <Route path="/home/:id" element={<Contact/>} />
      <Route path="/" element={<Content/>} />
      </Routes>
   
    </Router>


  </div>)


}

export default App;
