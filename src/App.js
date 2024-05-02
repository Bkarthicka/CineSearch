import {useEffect, useState} from "react";

import MovieCard from "./MovieCard";

import './App.css';

import searchIcon from './search.svg'

//a8862ba9
const API_URL = 'http://www.omdbapi.com?apikey=a8862ba9';

// const movie1 ={
//         "Title": "Thor",
//         "Year": "2011",
//         "imdbID": "tt0800369",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
// }

const App = () =>{

    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
useEffect(() => {
    searchMovies('')
},[])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
          
                />
                <img
                src={searchIcon}
                alt="Search"
                onClick={(e) => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
            ))}
                </div>
            ) : (
                <div className="empty">
                  <h2>Search movie</h2>
                </div>
      )}

        </div>
    );
}
export default App;