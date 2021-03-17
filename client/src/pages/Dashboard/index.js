import React, { useState } from 'react';

import api from '../../services/api'

import './styles.css';

function Dashboard() {
  const [inputRepository, setInputRepository] = useState() //estado que armazen o input
  const [repositories, setRepositories] = useState([]);

  async function whenUserSubmit(ev) {
    ev.preventDefault();

    const response = await api.get(`users/${inputRepository} `);
    console.log(response.data);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setInputRepository('');
  }

  return (
    <>
      <h1> Search repositories on Github </h1>

      <form className="searchArea" onSubmit={whenUserSubmit}>
        <input
          value={inputRepository}
          //Quando o usuario altera o valor do input -> Valor do input disponivel em eve
          onChange={(e) => setInputRepository(e.target.value)} 
          placeholder="Digite o nome do usuario"
        />

        <button type="submit">Pesquisar</button>
      </form>

      <div className="repositories"> 
        {repositories.map(repository => (
          <a key={repository.login} href="check">
            <img 
              src={repository.avatar_url}
              alt={repository.login}
            />
          
            <div>
                <strong>{repository.login}</strong>
                <p>{repository.name}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Dashboard;