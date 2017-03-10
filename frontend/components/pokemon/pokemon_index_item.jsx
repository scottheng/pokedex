import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = (props) => {
  return (
      <li>
        <Link to={`/pokemon/${props.pokemon.id}`}>
          <img src={props.pokemon.image_url} width="42" height="42"/>
          {props.pokemon.name}
        </Link>
      </li>
  );
};
