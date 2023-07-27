import {useNavigate,useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { supabase } from '../client'
import Img from "./youtube.png"
export const Content2=()=>{
  let navigate=useNavigate();
    let { id } = useParams();
    const [posts, setPosts] = useState([]);
    const fetchPosts=async () => {  
        const {data}= await supabase
      .from('Creators')
      .select("*")
      .eq('id',id)
     
      setPosts(data)
      }
      const deletepost=async (id) => {  
        const {data}= await supabase
      .from('Creators')
      .delete()
      .eq('id',id)
      }
      console.log(posts)
      useEffect(()=>{
        fetchPosts();
    
      },[]);
    return(
        <div className='float'  style={{marginLeft:"500px"}}>
       <h5>Name:</h5>
       <p>{posts?.[0]?.id}</p>
        <p>{posts?.[0]?.name}</p>
      
        <p>{posts?.[0]?.Description}</p>
        {posts?.[0]?.YouTube?
        <a href={`https://www.youtube.com/@${posts?.[0]?.YouTube}`}>
<img src={Img} style={{width:"20px"}} ></img></a>:null}
<br></br>
<img src={posts?.[0]?.Image} style={{width:"200px"}}></img>
<button onClick={()=>{navigate(`/update/${posts?.[0]?.id}`)}}>Update</button>
<button onClick={()=>{deletepost(posts?.[0]?.id);navigate('/') }}>Delete</button>
        </div>
    )
}