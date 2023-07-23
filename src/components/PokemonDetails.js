import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [pokemonType, setPokemonType] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.data)
      .then(data => {
        setPokemon(data);
        // Запрос для получения типа покемона
        return axios.get(data.types[0].type.url);
      })
      .then(response => response.data)
      .then(data => setPokemonType(data));
  }, [name]);

  if (!pokemon || !pokemonType) {
    return <div>Loading...</div>;
  }

  const styles = {
    container: {
      textAlign: 'center',
      margin: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textTransform: 'capitalize'
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      margin: '10px',
    },
    type: {
      fontSize: '18px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{pokemon.name}</h1>
      <img style={styles.image} src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div style={styles.type}>Type: {pokemonType.name}</div>
      {/* Другая информация о покемоне */}
    </div>
  );
}