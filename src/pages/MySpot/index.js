import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function MySpot(){
  const [spots, setSpots] = useState([]);
  
  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user_id');
      const response = await api.get('/dashboard', { 
        headers: { user_id }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <>
    {spots.length === 0 ? <p>Nenhum spot cadastrado.</p>:'' }
     { <ul className="spot-list">
       {spots.map(spot => (
         <li key={spot._id}>
           <header style={  {backgroundImage: `url(${spot.thumbnail_url})`}  } />
           <strong>{ spot.company }</strong>
           <span>{ spot.price ? `R$ ${spot.price}/dia`: 'GRATUITO' }</span>
         </li>
       ))}
     </ul> }
     <Link to='new-spot'> 
        <button className="btn">Cadastrar novo spot</button>
     </Link>
    </>
  );
}