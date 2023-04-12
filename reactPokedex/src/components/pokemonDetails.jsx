import React from 'react';


const PokemonDetails = ({ pokemon }) => {
    return (
        <div className="pokemon-details">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>Types</h2>
        {pokemon.types.map((type, index) => (
            <p key={index}> {type.type.name}</p>
        ))}
        <h2>Abilities</h2>
        {pokemon.abilities.map((ability, index) => (
            <p key={index}> {ability.ability.name}</p>
        ))}
        <h2>Stats</h2>
        {pokemon.stats.map((stat, index) => (
            <p key={index}> {stat.stat.name}: {stat.base_stat}</p>
        ))}
        </div>
    );
}

export default PokemonDetails;