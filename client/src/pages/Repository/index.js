import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';
import api from '../../services/api'

import './styles.css'

function Repository() {
  const [repos, setRepos] = useState([])
  

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/users/${params.repository}`).then((response) => {
      const repository = response.data;
      setRepos(...repos, repository);
    })
  }, [params.repository]);

  return(
    <>
      <Link className="iconBack" to="/"> 
      <FiCornerUpLeft size={29} />
      </Link>

      {repos.map(repos => (
        <Link key={repos.id} to={repos.html_url}>
          <div>
              <strong>{repos.name}</strong>
              <p>{repos.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Repository;