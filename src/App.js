import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';
import Header from './components/Header'; // Adjust the path if necessary
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    fetch('movies.json')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);
  
  const [movies, setMovies] = useState([]); // Array of movie objects
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist(prev =>
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId) 
        : [...prev, movieId]
    );
  };

  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header />
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={
                <MoviesGrid 
                  movies={movies} 
                  watchlist={watchlist} 
                  toggleWatchlist={toggleWatchlist} 
                />
              } 
            />
            <Route 
              path='/watchlist' 
              element={
                <Watchlist 
                  movies={movies} 
                  watchlist={watchlist} 
                  toggleWatchlist={toggleWatchlist} 
                />
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
