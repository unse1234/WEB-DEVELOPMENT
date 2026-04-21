import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import axios from 'axios'
const App = () => {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
      setData(response.data);
    } catch (error) {
       setError(error);
    }
    finally
      { setLoading(false)}
  }
  const showError = () => {
      return <h1 className='text-3xl text-center m-auto'>Error: {error.message}</h1>;}
  
  
  useEffect(() => { 
getData();
  }, []) 
  return (
    loading ? <h1 className='text-3xl text-center m-auto'>Loading...</h1> : error ? showError() : <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
    {data.map((item) => (
      <Card key={item.id} data={item} />
    ))}
  </div>
  )
}

export default App
// https://picsum.photos/v2/list?page=2&limit=100
