import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.pokemonId !== newProps.params.pokemonId){
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  render() {
    let items = null;
    if (this.props.pokemon.items){
      items = this.props.pokemon.items.map((item, idx) => {
        return <Link to={`/pokemon/${this.props.pokemon.id}/item/${item.id}`} key={idx}>

          <img src={item.image_url} height='42' width='42'/>

          </Link>;
        });
    }

    return (
      <section className="pokemon-detail">
        <ul>
          <li>Id: {this.props.pokemon.id}</li>
          <li>Name: {this.props.pokemon.name}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Type: {this.props.pokemon.poke_type}</li>
          <img src={this.props.pokemon.image_url} />
          <div>
            <ul>
              {items}
            </ul>
          </div>
        </ul>

        {this.props.children}
      </section>
    );
  }
}

export default PokemonDetail;
