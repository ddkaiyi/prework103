import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import moment from 'moment';
import { BarChart, Bar,  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate,useParams } from 'react-router-dom';


export const Content=()=>{
    let navigate=useNavigate();
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
        <div>
        <div className='left'> 
        <h1 onClick={reload}>AstroDash</h1>
        <h2>Dashboard</h2>
        <h2>Search</h2>
        <h2>About</h2>
        </div>
        <div className='right'>
        <div className='flo'>
          <ul>
            <li><h1>New York
  
  </h1><h2>New York, USA</h2></li>
            <li><h1>{moment(data?.data?.[0]?.moonrise_ts * 1000).format('hh:mm:ss')}</h1><h2>moon rise</h2></li>
            <li><h1>{data?.data?.[0]?.moon_phase<0.5?"🌒":"🌔"}</h1><h2>Moon Pharse</h2></li>
          </ul>
        </div>
        <div className='main'>
      
          <h5>Date search:</h5><textarea placeholder='Enter data...' onChange={(e)=>{Setsdate(e.target.value)} } /><button onClick={search}>Search</button>
         <ul>
          <h4>Date</h4> <h4>Temperature</h4><h4>Time</h4><h4>pharse</h4><h4>Details</h4>
          {newdata?newdata.map((item)=>(
    <div>
   <p>{item.datetime}</p><p>{item.temp}</p><p>{
  moment(item.ts* 1000).format('hh:mm:ss') }</p><p>{item.moon_phase < 0.5?"🌒":"🌔"}</p></div>
  )):
  
  data.data?.map((item)=>(
    <div>
   <p>{item.datetime}</p><p>{item.temp}</p><p>{
  moment(item.ts* 1000).format('hh:mm:ss') }</p><p>{item.moon_phase < 0.5?"🌒":"🌔"}</p><a onClick={()=>{navigate(`/home/${item.datetime}`)}}>🔗</a></div>
  ))
  }</ul>
  
        </div>
        <div className='right-down'>
        <div className='table1'>
        <LineChart width={320} height={300} data={data.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={4} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="moon_phase" stroke="#8884d8" activeDot={{ r: 8 }} />
  
         </LineChart>
        </div>
        <div className='table2'>
        <BarChart width={320} height={300} data={data.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" nterval={4}/>
        <YAxis />
        <Tooltip />
        <Legend />
  
        <Bar dataKey="temp" fill="#8884d8"/>
      </BarChart>
        </div>
        </div>
      </div>
      </div>
    )
}