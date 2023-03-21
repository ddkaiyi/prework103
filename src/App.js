import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

import './App.css';

function App() {
  // const [datas,setDatas]=useState([])
  const [CatFact,setCatFact]=useState([])
  const [Ban,setBan]=useState([])
  const [now,setNow]=useState("")
  const fetchData=()=>{
    axios.get("https://api.thedogapi.com/v1/images/search?has_breeds=true&api_key=live_foLUAORVoeWBTHBkMwpCxBF1DQyW1nRg19CQAa0eZVML16jjHOdvI8u0jyZxfx1V").then((res)=>{
      setCatFact(pre=>[...pre,res.data])
    setNow(res.data)
    
    }
    ).catch(error=>console.error(error))
  };
  useEffect(()=>{
    fetchData();

  },[]);
  const Bandata=(e)=>{
setBan(pre=>[...pre,e.target.value])
  }

console.log( Ban)
  return(
    <div >
      {/* <input placeholder='Ex.Pedro...'
       onChange={(event)=>{setName(event.target.value)}}
      ></input> */}
       <div className="left">
      {CatFact.map((item) => (
          <div  key={item[0]?.id}>
       <h1>{item[0]?.breeds[0]?.name}</h1>
       <img src={item[0].url} width={200}></img>
          </div>
        ))}
        </div>
  <div className='middle'>
   <h1>Trippin' on Dogs</h1>

<h2>Discover cats from your wildest dreams!</h2>

<p>😺😸😹😻😼😽🙀😿😾</p>

<button className='choice'>{now[0]?.breeds[0]?.bred_for
}</button>
<button className='choice'onClick={Bandata} value={now[0]?.breeds[0]?.life_span

}>{now[0]?.breeds[0]?.life_span

}</button>
<button className='choice'>{now[0]?.breeds[0]?.weight.metric

}</button>
  <h1>{now[0]?.breeds[0]?.name}</h1>
       <img src={now[0]?.url} width={200}></img>

       <button className='new' onClick={fetchData}>🔀 Discover!</button>
  </div>
 
    
  
{/* <button >Predict Age</button> */}
<div className='right'>

<h1>Ban list</h1>

{Ban.filter((item)=>item).map((item)=>(
 <div  key={item}>
<button>{item}</button>
    </div>
))}
</div>
</div>

  )
}

export default App;
