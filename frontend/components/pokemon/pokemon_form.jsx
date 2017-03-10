import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", attack: "", defense: "", poke_type: "", moves: [], image_url: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.update(e.target.className, e.target.value);

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createPokemon({pokemon: this.state});
    debugger
  }

  update(property, value) {
    debugger
    return () => {
      if (property === "moves")
      {
        this.setState({[property]: [property].push(value)});
      }
      else{
        this.setState({[property]: value});
      }
    };
  }



  render() {
    const types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ].map((type, idx) => (
      <option value={type} key={idx}>{type}</option>
    ));

    return (

      <form>
        <input type="text" onChange={this.handleChange} className="name" placeholder="name"></input>
        <input type="text" onChange={this.handleChange} className="img_url" placeholder="img_url"></input>
        <input type="text" onChange={this.handleChange} className="attack" placeholder="attack"></input>
        <input type="text" onChange={this.handleChange} className="defense" placeholder="defense"></input>
        <input type="text" onChange={this.handleChange} className="move" placeholder="move 1"></input>
        <input type="text" onChange={this.handleChange} className="move" placeholder="move 2"></input>
        <select>{types}</select>
        <input type="submit" value="Create Pokemon!" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default PokemonForm;
