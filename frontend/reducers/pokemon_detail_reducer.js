import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonDetailReducer = (state = {}, action) => {
    switch(action.type){
      case RECEIVE_POKEMON:
        return merge({},action.pokemonDetail);
      default:
        return state;
    }
};

export default pokemonDetailReducer;
