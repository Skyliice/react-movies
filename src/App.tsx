import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import IndexGenres from './genres/IndexGenres';
import LandingPage from './LandingPage';
import Menu from './Menu';
import IndividualMovie from './movies/IndividualMovie';
import { landingPageDTO, movieDTO } from './movies/Movies.model';
import MoviesList from './movies/MoviesList';
import routes from './route-config';

function App() {

  return (
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Switch>
            {routes.map(route => 
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>)}
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App;
