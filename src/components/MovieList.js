import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return movies && (
    <div className="px-12">
        <h1 className="text-2xl py-4 font-medium text-white">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
