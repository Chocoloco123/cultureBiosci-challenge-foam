import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './components/mainPage';
import ImagesCategorizePage from './components/ImagesCategorizePage';
import EditFoamStatus from './components/EditFoamStatus';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <h1>Foam</h1>
          <MainPage />
        </Route>
        <Route path='/images/:pageNumber' exact={true} >
          <h1>Foam</h1>
          <p>Please view the images below and categorize foam presence.</p>
          <ImagesCategorizePage />
        </Route>
        <Route path='/images/:id/update' exact={true}>
          <EditFoamStatus />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
