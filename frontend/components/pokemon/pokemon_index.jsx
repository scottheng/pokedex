import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){this.props.requestAllPokemon();}

  render() {
    // const allPokemon = () => {
    //   return this.props.pokemon.map( (pokemon, idx) => (
    //     <li className="pokemon-index-item" key={idx}>
    //       <a href={pokemon.image_url}>
    //         <img src={pokemon.image_url} width="42" height="42"/>
    //         {pokemon.name}
    //       </a>
    //     </li>
    //   )
    //   );
    // };


    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem
      key={poke.id} pokemon={poke} />);
    return (
      <section className="pokedex">
        {this.props.children}
        <ul>
          {pokemonItems}
        </ul>
      </section>

    );
  }
}

export default PokemonIndex;
