import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { supabase } from '../client'
import Img from "./youtube.png"
export const Show=()=>{
    let navigate=useNavigate();
    const [posts, setPosts] = useState([]);
    const fetchPosts=async () => {  
        const {data}= await supabase
      .from('Creators')
      .select('*')
      setPosts(data)
      }

      useEffect(()=>{
        fetchPosts();
    
      },[]);
      console.log(posts)

      return(
        <div className='show' >
{ posts!== null?posts.map((post)=>(
  <div className='all'>
   
    <div className='float'style={{ backgroundImage:`url(${post.Image})`, float:'left'}}>
<p>Name: {post.name}</p>
{post.YouTube?
  <a href={`https://www.youtube.com/@${post.YouTube}`}>
<img src={Img} style={{width:"20px"}} ></img></a>:null}
<p > {post.Description}</p>
<button onClick={()=>{navigate(`/home/${post.id}`)}}>Detail</button>

</div>
</div>
)


):null}
        </div>
      )
}
