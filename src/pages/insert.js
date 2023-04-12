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
    .from('Crewmate')
    .insert({name: data.name, speed: data.speed, color: data.color})
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

                <label htmlFor="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" {...register('speed')}/><br />
                <br/>

                <label htmlFor="color">Color</label><br />
               
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
