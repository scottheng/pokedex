import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
// import { selectAllPokemon } from '../../reducers/selectors';
import {ItemDetail} from './item_detail';

const selectPokemonItem = (state, itemId) => {
  // debugger
  let theItem = null;
  state.pokemonDetail.items.forEach(item => {

    if (itemId == item.id){
      theItem = item;
      console.log(theItem);
    }
  });
  return theItem;
};

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.params.itemId)
});

export default connect(
  mapStateToProps
)(ItemDetail);
