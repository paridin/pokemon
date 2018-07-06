
import React, { Component } from 'react';
import { PokemonList } from './Pokemon'

export default class PokemonDashBoard extends Component {
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
        <section>
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
          {this.state.isLoading ? <div className="loading"> Loading... </div> :
            <section className="pokemon-list">
              <PokemonList onClick={(url) => alert("Comming soon...", url)} pokemons={this.state.results} />
            </section>
          }

        </section>
      );
    }
}
