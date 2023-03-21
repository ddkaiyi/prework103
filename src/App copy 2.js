import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_foLUAORVoeWBTHBkMwpCxBF1DQyW1nRg19CQAa0eZVML16jjHOdvI8u0jyZxfx1V');
      setData(response.data);
    }
    fetchData();
  }, []);
  function handleClick(item) {
    setSelectedItem(item);
  }

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}  onClick={() => handleClick(item)}>{item.name}</li>
        ))}
      </ul>
            {selectedItem && (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
          <img src={selectedItem.imageUrl} alt={selectedItem.weight} />
        </div>
      )}
    </div>
  );
}

export default App;
