import React from 'react';
import ReactDOM from 'react-dom';
import {receiveNewPokemon, createPokemon, requestAllPokemon} from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors.js';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  // window.selectPokemon = selectPokemon;
  // window.requestSinglePokemon = requestSinglePokemon;
  window.receiveNewPokemon = receiveNewPokemon;
  window.createPokemon = createPokemon;
  window.fetchPokemon = APIUtil.fetchPokemon;
  window.makePokemon = APIUtil.makePokemon;
  ReactDOM.render(<Root store={store} />, rootEl);
});
