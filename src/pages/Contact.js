
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import moment from 'moment';
import { BarChart, Bar,  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {useNavigate,useParams } from 'react-router-dom';

export const Contact=()=>{
    let { id } = useParams();
    let navigate=useNavigate();
    const[newdata,Setnewdata]=useState(null);
    const fetchData=()=>{
        axios.get("https://api.weatherbit.io/v2.0/forecast/daily?city=newyork&key=140c7c8c5afc490a813c2666df9c4c50").then((res)=>{
            //  Setdata(res.data)
             Setnewdata(res.data.data?.filter((item)=>item.datetime== id));
        })}
        useEffect(()=>{
          fetchData();
         
        },[]);
       
        console.log(newdata)
    return(
        
        <div>
                <div className='left'> 
    <h1  onClick={()=>{navigate(`/`)}}>AstroDash </h1>
    <h2>Dashboard</h2>
    <h2>Search</h2>
    <h2>About</h2>
    </div>
            <h1>Date: {id}</h1>
            <h1>Pharse:{newdata?.[0]?.moon_phase<0.5?"🌓 First Quarter":"🌖 Waning Gibbous"}</h1>
            <h1>Moonrise: {moment(newdata?.[0].moonrise_ts* 1000).format('hh:mm:ss')  } PM</h1>
            <h1>Moonset: {moment(newdata?.[0].moonset_ts* 1000).format('hh:mm:ss')  } AM</h1>
            <h1>Visable: {newdata?.[0]?.vis} %</h1>
            <h1>Description: {newdata?.[0]?.weather.description} </h1>
        </div>
    )
}