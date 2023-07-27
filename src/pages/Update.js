import {useNavigate,useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import{useForm} from "react-hook-form";
import { supabase } from '../client'
export const Update=()=>{
   
    let { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({});
    const fetchPosts=async () => {  
        const {data}= await supabase
      .from('Creators')
      .select("*")
      .eq('id',id)
     
      setPosts(data)
      }
    const UpdatePost = async (data) => {  
        // event.preventDefault();
        await supabase
        .from('Creators')
        .update({name: data.name, Image: data.Image,Description:data.Description, YouTube: data.YouTube})
        .eq('id',id)
        fetchPosts();
        alert("Update successfully!")
    }
      console.log(posts)
      useEffect(()=>{
        fetchPosts();
    
      },[]);
      const {register, handleSubmit, errors}=useForm();
    //   const onSubmit=(data)=>{
 
  
    //     console.log(data);
    //     setFormData(data)
    //     UpdatePost();
    //    }
    return(
        <div>
          
               <form onSubmit={handleSubmit(UpdatePost)} >
                <label htmlFor="name">Name:{ posts?.[0]?.name}</label> <br />
                <input type="text" id="name" name="name"  {...register('name')}/><br />
                <br/>
                <label htmlFor="Image">Image:{ posts?.[0]?.Image}</label> <br />
                <input type="text" id="Image" name="Image"  {...register('Image')}/><br />
                <br/>
                <label htmlFor="Description">Description:{posts?.[0]?.Description}</label><br />
                <input type="text" id="Description" name="Description" {...register('Description')}/><br />
                <br/>
                <label htmlFor="YouTube">YouTube:{posts?.[0]?.YouTube}</label><br />
                <input type="text" id="YouTube" name="YouTube" {...register('YouTube')}/><br />
                <br/>
          
             
                <br/>
                <input type="submit" value="Submit" />
  </form>
   
        </div>
    )
}
