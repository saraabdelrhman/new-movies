import React, { useState } from "react";
import '../styles.css';
import MoviesCard from "../components/MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
    const [searchItem, setSearchItem] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");

    const handleGenre = (e) => {
        setGenre(e.target.value);
    };

    const handleSearch = (e) => {
        setSearchItem(e.target.value);
    };

    const handleRating = (e) => {
        setRating(e.target.value);
    };

    // Combine filtering based on genre, search item, and rating
    const filteredMovies = movies.filter(movie => {
        const matchesGenre = genre === "All Genres" || movie.genre.toLowerCase().includes(genre.toLowerCase());
        const matchesSearchItem = movie.title.toLowerCase().includes(searchItem.toLowerCase());

        let matchesRating = true;
        if (rating === "Good") {
            matchesRating = movie.rating >= 8;
        } else if (rating === "Ok") {
            matchesRating = movie.rating >= 5 && movie.rating < 8;
        } else if (rating === "Bad") {
            matchesRating = movie.rating < 5;
        }

        return matchesGenre && matchesSearchItem && matchesRating;
    });

    return (
        <div>
            <input
                type="text"
                value={searchItem}
                onChange={handleSearch}
                className="search-input"
                placeholder="Search movie...."
            />
            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenre}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRating}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>
            <div className="movies-grid">
                {filteredMovies.map(movie => (
                    <MoviesCard 
                      movie={movie} 
                      key={movie.id}
                      toggleWatchlist={toggleWatchlist} 
                      watchlist={watchlist}
                      isWatchlisted={watchlist.includes(movie.id)}
                    />
                ))}
            </div>
        </div>
    );
}
