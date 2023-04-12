import {useNavigate,useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { supabase } from '../client'
export const Content2=()=>{
    let { id } = useParams();
    const [posts, setPosts] = useState([]);
    const fetchPosts=async () => {  
        const {data}= await supabase
      .from('Crewmate')
      .select("*")
      .eq('id',id)
     
      setPosts(data)
      }
      console.log(posts)
      useEffect(()=>{
        fetchPosts();
    
      },[]);
    return(
        <div>
       <h5>Name:</h5>
        <p>{posts?.[0]?.name}</p>
        <h5>Speed:</h5>
        <p>{posts?.[0]?.speed}</p>
        <h5>Color:</h5>
        <p>{posts?.[0]?.color}</p>
        </div>
    )
}