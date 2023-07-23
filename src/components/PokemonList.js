import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]); // State for the list of pokemons

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.data.results)
      .then(data => setPokemonList(data));
  }, []);

  const styles = {
    container: {
      textAlign: 'center',
    },
    pokemonList: {
      listStyle: 'none',
      textDecoration: 'none',
    },
    listItem: {
      paddingBottom: '10px',
      color: '#FF8E33',
      textTransform: 'capitalize'
    },
    link: {
      color: '#000',
      textDecoration: 'none',
    },
  }

  return (
    <div style={styles.container}>
      <h1>Pokemon List</h1>
      <ul style={styles.pokemonList}>
        {pokemonList.map(pokemon => (
          <li style={styles.listItem} key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`} style={styles.link}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
