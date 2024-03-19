import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return movies && (
    <div className="-my-52 relative z-20">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.popularMovies}/>
      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer
