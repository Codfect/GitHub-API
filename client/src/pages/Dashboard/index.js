import React, { useState } from 'react';

import api from '../../services/api'

import './styles.css';

function Dashboard() {
  const [inputRepository, setInputRepository] = useState() //estado que armazen o input
  const [repositories, setRepositories] = useState([]);


  return (
    <>
      <h1> Search repositories on Github </h1>

      <form className="searchArea">
        <input
          value={inputRepository}

          //Quando o usuario altera o valor do input -> Valor do input disponivel em event
          onChange={(event) => setInputRepository(event.target.value)} 
          placeholder="Digite o nome do usuario"
        />

        <button type="submit">Pesquisar</button>
      </form>

      <div className="repositories"> 
        <a href="check">
          <img 
            src="https://avatars.githubusercontent.com/u/54602909?s=400&u=869175d1dcaa9abf9f6952279f7b3809cbcd26f8&v=4"
            alt="Oliver teste"
          />
        
          <div>
              <strong>Codfect</strong>
              <p>Oliver</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Dashboard;