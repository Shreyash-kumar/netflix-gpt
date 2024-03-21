import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSearchSuggestion = () => {
    const movies = useSelector((store) => store.movies.geminiFetchedMovies);

    if(!movies) return null;

    console.log('ewjbkk');

    return  (
      <div className="relative z-4 flex justify-center">
        {movies && <MovieList title={"Search Results"} movies={movies}/>}
      </div>
    )
}

export default GptSearchSuggestion;
