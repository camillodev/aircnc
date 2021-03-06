import React, { useState }  from 'react';
import api from '../../services/api';


export default function Login({history}) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post(`/sessions`, {params: {
      email: email
    }});
    
    if(!response.data || response.data.error){
      alert("user not found");
      return
    }
    const { _id } = response.data;
    
    localStorage.setItem('user_id', _id);

    history.push('/dashboard')

  }

  return (
    <>
    <p>
      Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
    </p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL *</label>
      <input type="text" id="email" placeholder="Seu melhor email" onChange={event => setEmail(event.target.value)} />

      <button className="btn" type="submit">Entrar</button>
    </form>
    </>
  );
}