import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import './style.css';

export default function NewSpot() {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(()=>{
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  },[thumbnail])

  function handleSubmit(event) {
    event.preventDefault();

  }
  return (
     <form onSubmit={handleSubmit}>
       <label 
       id="thumbnail" 
       style={ { backgroundImage: `url(${preview})` } }
       className={thumbnail ? 'has-thumbnail': ''}
       >
         <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
         <img src={camera} alt="Select image"/>
       </label>

       <label htmlFor="company">EMPRESA</label>
       <input type="text" id="company" placeholder="Sua empresa incrível" value={company} onChange={event => setCompany(event.target.value)}/>

       <label htmlFor="techs">TECNOLOGIAS <span>(separadas por vírgulas)</span></label>
       <input type="text" id="techs" placeholder="Quais tecnologias usam?" value={techs} onChange={event => setTechs(event.target.value)}/>

       <label htmlFor="price">VALOR DA DIÁRIA <span>(em branco para GRATUITO)</span></label>
       <input type="text" id="price" placeholder="Valor cobrado por dia" value={price} onChange={event => setPrice(event.target.value)}/>

      <button type="submit" className="btn"> Cadastrar</button>

     </form>
    );
}