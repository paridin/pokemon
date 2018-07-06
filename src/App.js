import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PokemonDashBoard from './PokemonDashboard'
import PokemonDetails from './PokemonDetail'

import './App.css';


const App = props =>
  <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Pokémon Grid</h1>
            <nav className="main-navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
            </nav>
          </header>
          <div className="container">
            <Route exact path="/" component={PokemonDashBoard} />
            <Route exact path="/pokemon/:id" component={PokemonDetails} />
          </div>
        </div>
  </Router>

export default App;
