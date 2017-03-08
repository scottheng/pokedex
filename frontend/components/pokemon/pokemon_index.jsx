import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){this.props.requestAllPokemon();}

  render() {
    const allPokemon = () => {
      return this.props.pokemon.map( (pokemon, idx) => (
        <li className="pokemon-index-item" key={idx}>
          <a href={pokemon.image_url}>
            <img src={pokemon.image_url} width="42" height="42"/>
            {pokemon.name}
          </a>
        </li>
      )
      );
    };

    return (
      <section className="pokedex"><ul>{allPokemon()}</ul></section>
    );
  }
}

export default PokemonIndex;
