import React from "react";
import "../styles.css";

export default function MoviesCard({ movie, isWatchlisted, toggleWatchlist }) {

  // Handling error
  const handleError = (e) => {
    e.target.src = "../../public/images/default.jpg";
  };

  // Getting rating class
  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  // Handle watchlist toggle
  const handleWatchlistChange = () => {
    if (typeof toggleWatchlist === 'function') {
      toggleWatchlist(movie.id);
    } else {
      console.error('toggleWatchlist is not a function');
    }
  };

  return (
    <div>    
      <div key={movie.id} className="movie-card">
        <img 
          src={`images/${movie.image}`} 
          alt={movie.title} 
          onError={handleError} 
        />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <div>
            <span className="movie-card-genre">{movie.genre}</span>
            <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
              {movie.rating}
            </span>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isWatchlisted} 
              onChange={handleWatchlistChange}
            />
            <span className="slider">
              <span className="slider-label">
                {isWatchlisted ? "In watchlist" : "Add to watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
