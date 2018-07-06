import React, { Component } from 'react';
import './App.css';

const imgEndpoint = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const getIdUrl = url => url.split('/').filter(e => e).pop()

const Pokemon = props =>
  <div className="pokemon">
    <div className="details">
      <img src={`${imgEndpoint}/${getIdUrl(props.url)}.png`} alt={props.name} />
      <a
        onClick={event => {
            event.preventDefault();
            props.onClick(props.url)
          }
        }
      >
      {props.name}</a>
    </div>

  </div>

const PokemonList = ({ pokemons, onClick }) => {
  return pokemons.map((pokemon, idx) => <Pokemon onClick={onClick} key={idx} { ...pokemon } />)
}

class App extends Component {
  state = {
    count: 0,
    next: "",
    previous: "",
    results: [],
    isLoading: true
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=16`)
    .then(resp => resp.json())
    .then(res => this.setState({ ...res, isLoading: false }))
    .catch(err => console.error(err))
  }

  fetchPokemons = (url) => {
    this.setState({ isLoading: true })
    fetch(url)
    .then(resp => resp.json())
    .then(res => this.setState({ ...res, isLoading: false }))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokémon Grid</h1>
          <nav className="main-navigation">
            {this.state.previous ?
            <a onClick={e => {
              e.preventDefault()
              this.fetchPokemons(this.state.previous)
            }}>&lt; previous </a>
            : <div></div>}

            {this.state.next ? <a onClick={e => {
              e.preventDefault()
              this.fetchPokemons(this.state.next)
            }}> next &gt;</a> : <div></div>}

          </nav>
        </header>
        {this.state.isLoading ? <div className="loading"> Loading... </div> :
          <section className="pokemon-list">
            <PokemonList onClick={(url) => alert("Comming soon...", url)} pokemons={this.state.results} />
          </section>
        }

      </div>
    );
  }
}

export default App;
