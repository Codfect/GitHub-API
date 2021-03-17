import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';

import './styles.css'

function Repository() {
  const { params } = useRouteMatch();

  return(
    <Link className="iconBack" to="/"> 
      <FiCornerUpLeft size={18} />
      Back
    </Link>
  );
}

export default Repository;