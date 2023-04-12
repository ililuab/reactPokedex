import React from 'react';

const Pokemon = ({ pokemon }) => {
  return (
    <div id="pokedex" className="pokemon-animatie  col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 d-flex justify-content-center flex-column align-items-center"><div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
      <div className='pokemondetails'>
        <h4 className='text-center'>{pokemon.name}</h4>
        <h5 className='text-center'>Type:</h5>
        {pokemon.types.map((type, index) => (
          <p className="p-0 m-0 text-center" key={index}> {type.type.name}</p>
        ))}
      </div>
    </div>
);
}

export default Pokemon;
