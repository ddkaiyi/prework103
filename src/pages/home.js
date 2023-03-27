import{useQuery} from '@tanstack/react-query'
import React, { useState, useEffect } from 'react';
import  Axios   from 'axios';
export const Home=()=>{
    const {data:catData,isLoading,isError,refetch} =useQuery(["cat"],()=>{
        return Axios.get("https://www.boredapi.com/api/activity/").then((res)=>res.data)

    })
    console.log(catData)
    if(isError){
        return(    <div className='main'>
        <h1>This is the home page</h1>
        <h2>is Error……</h2>
        </div>)
    }
    if(isLoading){
        return(    <div className='main'>
        <h1>This is the home page</h1>
        <h2>is Loading……</h2>
        </div>)
    }
    return(
        <div className='main'>
        <h1>This is the home page</h1>
        <h2>{catData?.activity}</h2>
        <button onClick={refetch}>renew</button>
        </div>
    )
}