import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <section className='Pokemon'>
        <div className='pokemonAttributes'>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>{`Average weight: ${this.props.pokemon.averageWeight.value} kg`}</p>
        </div>

        <>
          <img className='pokeImage' src={this.props.pokemon.image}></img>
        </>
      </section>
    )
  }
}

export default Pokemon;