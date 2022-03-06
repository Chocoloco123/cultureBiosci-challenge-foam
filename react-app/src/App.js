import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ImagesCategorizePage from './components/ImagesCategorizePage';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <h1>Foam</h1>
          <p>Please view the images below and categorize the foam presence.</p>
          <ImagesCategorizePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
