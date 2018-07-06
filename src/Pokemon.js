import React from 'react';
import { Link } from 'react-router-dom'
const imgEndpoint = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
const getIdUrl = url => url.split('/').filter(e => e).pop()

export const PokemonSimple = props =>
<div className="pokemon">
  <div className="details">
    <img src={`${imgEndpoint}/${getIdUrl(props.url)}.png`} alt={props.name} />
    <Link to={`pokemon/${getIdUrl(props.url)}`}>{props.name}</Link>
  </div>
</div>

export const PokemonDetail = props =>
<section>
    <Link to="/">Go to Pokémon List</Link>
    <h1>{props.name}</h1>
    Weight: {props.weight}
    Heigth: {props.heigth}
    Experience: {props.base_experience}

    <div>
        <h5>Abilities</h5>
        {props.abilities.map(a => <li>{a.ability.name}</li>)}
    </div>
    <div>
        <h5>Stats</h5>
        {props.stats.map(s => <li>{s.stat.name}</li>)}
    </div>
</section>


export const PokemonList = ({ pokemons, onClick }) =>
    pokemons.map((pokemon, idx) =>
        <PokemonSimple onClick={onClick} key={idx} { ...pokemon } />
    )

