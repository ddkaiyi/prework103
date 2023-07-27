import React, { useState, useEffect } from 'react';
import{useForm} from "react-hook-form";
import { useNavigate,useParams } from 'react-router-dom';
import { supabase } from '../client'
export const Insert=()=>{
    const [formData, setFormData] = useState({});
    let navigate=useNavigate();

  const createPost = async (data) => {  
    // event.preventDefault();
    await supabase
    .from('Creators')
    .insert({name: data.name, Image: data.Image,Description:data.Description, YouTube: data.YouTube})
    .select();
   alert("create successfully!")
}
const {register, handleSubmit, errors}=useForm();


 return(
    <div className='Insert' >
        <form onSubmit={handleSubmit(createPost)} >
     
          
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" {...register('name')}/><br />
                <br/>

                <label htmlFor="Image">Image</label><br />
                <input type="text" id="Image" name="Image" {...register('Image')}/><br />
                <br/>
                <label htmlFor="Description">Description</label><br />
                <input type="text" id="Description" name="Description" {...register('Description')}/><br />
                <br/>
                <label htmlFor="YouTube">YouTube@</label><br />
                <input type="text" id="YouTube" name="YouTube" {...register('YouTube')}/><br />
                <br/>
         
                <input type="submit" value="Submit" />
  </form>
    </div>
 )

}
