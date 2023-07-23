import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import PokemonList from './components/PokemonList'; // Import the PokemonList component
import PokemonDetails from './components/PokemonDetails'; // Import the PokemonDetails component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Use Routes instead of div */}
          <Route path="/" element={<PokemonList />} /> {/* Use element prop instead of component */}
          <Route path="/pokemon/:name" element={<PokemonDetails />} /> {/* Use element prop instead of component */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
