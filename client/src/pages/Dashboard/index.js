import React from 'react';

import './styles.css';

function Dashboard() {
  return (
    <>
      <h1> Search repositories on Github </h1>

      <form className="searchArea">
        <input placeholder="Digite o nome do usuario" />

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
              <p>posso trazer a bio</p>
          </div>

        </a>
      </div>
    </>
  );
}

export default Dashboard;