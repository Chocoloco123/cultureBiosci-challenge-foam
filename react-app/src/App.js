import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './components/mainPage';
import ImagesCategorizePage from './components/ImagesCategorizePage';
import EditFoamStatus from './components/EditFoamStatus';
import FoamCategoriesPage from './components/Categories/FoamCategoriesPage';
import NoFoamCategoriesPage from './components/Categories/NoFoamCategoriesPage';
import UncategorizedCategoriesPage from './components/Categories/UncategorizedCategoriesPage';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <h1>Foam App</h1>
          <MainPage />
        </Route>
        <Route path='/images/categories/foam/:pageNumber' exact={true}>
          <h1>Foam App</h1>
          <p>Please view the images below and categorize foam presence.</p>
          <FoamCategoriesPage />
        </Route>
        <Route path='/images/categories/no_foam/:pageNumber' exact={true}>
          <h1>Foam App</h1>
          <p>Please view the images below and categorize foam presence.</p>
          <NoFoamCategoriesPage />
        </Route>
        <Route path='/images/categories/uncategorized/:pageNumber' exact={true}>
          <h1>Foam App</h1>
          <p>Please view the images below and categorize foam presence.</p>
          <UncategorizedCategoriesPage />
        </Route>
        <Route path='/images/all/:pageNumber' exact={true} >
          <h1>Foam App</h1>
          <p>Please view the images below and categorize foam presence.</p>
          <ImagesCategorizePage />
        </Route>
        <Route path='/images/all/:id/update' exact={true}>
          <EditFoamStatus />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
