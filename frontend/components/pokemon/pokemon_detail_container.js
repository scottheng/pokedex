import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
// import { selectAllPokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: ((poke) => dispatch(requestSinglePokemon(poke)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
