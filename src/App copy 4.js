import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
 const [alldata,setAlldata]=useState([]);
 let a=[];
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search?api_key=live_foLUAORVoeWBTHBkMwpCxBF1DQyW1nRg19CQAa0eZVML16jjHOdvI8u0jyZxfx1V');
      
      setData(response.data);
 
  
    }
   
    fetchData();
   
  }, []);


// console.log(a===null)
  // //   const handleClick = async () => {
  //   try {
  //     const response = await fetch('https://example.com/new-data');
  //     const newData = await response.json();
  //     setData(newData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };//
  const handleAddData = () => {
    setAlldata([...alldata, data]);
    async function fetchData2() {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search?api_key=live_foLUAORVoeWBTHBkMwpCxBF1DQyW1nRg19CQAa0eZVML16jjHOdvI8u0jyZxfx1V');
      
      setData(response.data);
 
      console.log(data)

    }
    // 将新数据添加到数组中
    
    
    fetchData2()
    console.log(alldata);
  };
const data3=data.filter(item=>item.breeds[0])
console.log(data3)
if(data2===null){
alert("no")
}

  return (
    <div>

      
      <ul>
        {data.filter(item=>item.breeds[0]).map((item) => (
          <div className='middle' key={item.id}>
          <h1>Dog</h1>
          <li >{item.breeds[0].name}</li>
         <img src={item.url} alt="Golden Retriever" width={500} ></img>
         <button onClick={handleAddData}>Add Data</button>
          </div>
        ))}
            
      </ul>
   
    </div>
  );
}

export default App;
