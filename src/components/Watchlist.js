import React from "react";
import "../styles.css";
import MovieCard from "../components/MovieCard"; // Ensure the filename and path match

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map(id => {
          const movie = movies.find(movie => movie.id === id);
          if (!movie) return null; // Handle case where movie is not found
          return (
            <MovieCard 
              key={id}
              movie={movie} 
              isWatchlisted={true}
              toggleWatchlist={toggleWatchlist}
            />
          );
        })}
      </div>
    </div>
  );
}
