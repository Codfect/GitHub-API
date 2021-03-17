import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Rotas importadas
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// Componentes com as rotas
function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;