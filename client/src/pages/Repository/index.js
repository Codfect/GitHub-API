import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';
import api from '../../services/api'

import './styles.css'

function Repository() {
  const [repository, setRepository] = useState(null)

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`users/${params.repository}`).then((response) => {
      console.log(response.data);
    })
  }, [params.repository]);

  return(
    <>
      <Link className="iconBack" to="/"> 
      <FiCornerUpLeft size={29} />
      </Link>

      <div className=" "> 
        <div>
          <strong>Codfect</strong>
          <p>Oliver</p>
        </div>
      </div>
    </>
  );
}

export default Repository;