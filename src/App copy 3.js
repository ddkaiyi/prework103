import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search?api_key=live_foLUAORVoeWBTHBkMwpCxBF1DQyW1nRg19CQAa0eZVML16jjHOdvI8u0jyZxfx1V');
      
      setData(response.data);
      console.log(data)
    }
    fetchData();
  }, []);

 
  return (
    <div>

      
      <ul>
        {data.filter(item=>item.breeds[0]).map((item) => (
          <div className='middle' key={item.id}>
          <h1>Dog</h1>
          <li >{item.breeds[0].name}</li>
         <img src={item.url} alt="Golden Retriever" width={500} ></img>
          
          </div>
        ))}
      </ul>
   
    </div>
  );
}

export default App;
