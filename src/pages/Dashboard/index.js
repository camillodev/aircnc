import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function DashBoard(){
  const [spots, setSpots] = useState([]);
  
  useEffect(() => {
    async function loadSpots() {
      // const user_id = localStorage.getItem('user_id');
      const response = await api.get('/spots');

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <>
     { <ul className="spot-list">
       {spots.map(spot => (
         <li key={spot._id}>
           <header style={  {backgroundImage: `url(${spot.thumbnail_url})`}  } />
           <strong>{ spot.company }</strong>
           <span>{ spot.price ? `R$ ${spot.price}/dia`: 'GRATUITO' }</span>
          <span>{ spot.techs.join(', ') }</span>
         </li>
       ))}
     </ul> }
     <Link to='new-spot'> 
        <button className="btn">Cadastrar novo spot</button>
     </Link>
    </>
  );
}