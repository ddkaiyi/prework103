import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { supabase } from '../client'
export const Show=()=>{
    let navigate=useNavigate();
    const [posts, setPosts] = useState([]);
    const fetchPosts=async () => {  
        const {data}= await supabase
      .from('Crewmate')
      .select('*')
      setPosts(data)
      }
    const deletepost=async (id) => {  
        const {data}= await supabase
      .from('Crewmate')
      .delete()
      .eq('id',id)
      }
      useEffect(()=>{
        fetchPosts();
    
      },[]);
      console.log(posts)

      return(
        <div className='show' >
{posts.map((post)=>(
  <div className='all'>
    <div className='float'style={{boxShadow: `10px 10px  ${post.color}`}}>
<p>Name: {post.name}</p>
<p>Speed: {post.speed} KM</p>
<p > Color:{post.color}</p>
<button onClick={()=>{navigate(`/home/${post.id}`)}}>Detail</button>
<button onClick={()=>{navigate(`/update/${post.id}`)}}>Update</button>
<button onClick={()=>{deletepost(post.id) ;window.location.reload()}}>Delete</button>
</div>
</div>
)


)}
        </div>
      )
}
