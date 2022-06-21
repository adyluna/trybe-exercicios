import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        return (
            <section className='Pokemons'>
              {this.props.data.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
            </section>
        )
    }
};

export default Pokedex;