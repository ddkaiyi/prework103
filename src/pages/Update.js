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
      .from('Crewmate')
      .select("*")
      .eq('id',id)
     
      setPosts(data)
      }
    const UpdatePost = async (data) => {  
        // event.preventDefault();
        await supabase
        .from('Crewmate')
        .update({name: data.name, speed: data.speed, color: data.color})
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

                <label htmlFor="speed">Speed:{posts?.[0]?.speed}</label><br />
                <input type="text" id="speed" name="speed" {...register('speed')}/><br />
                <br/>

                <label htmlFor="color">Color:{posts?.[0]?.color}</label><br />
               
                  <p >
                    Red<input type="radio" name="color" value="red"{...register('color')}/>
                    Blue<input type="radio" name="color" value="blue"{...register('color')}/>
                    Green<input type="radio" name="color" value="green"{...register('color')}/>
                  </p>
             
                <br/>
                <input type="submit" value="Submit" />
  </form>
   
        </div>
    )
}
