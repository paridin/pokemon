import React, { Component } from 'react'
import { PokemonDetail }  from './Pokemon'

export default class PokemonDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            isLoading: true,
            pokemon: {
                abilities: [],
                base_experience: 0,
                height: 0,
                weigth: 0,
                stats: 0,
                name: 0
            }
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
        .then(resp => resp.json())
        .then(res => this.setState({ pokemon: { ...res }, isLoading: false }))
        .catch(err => console.error(err))
    }

    render() {
        console.log(this.state, this.props.match.params.id)
        return this.state.isLoading ?
            <div className="loading"> Loading... </div> :
            <PokemonDetail { ...this.state.pokemon } />

    }
}
