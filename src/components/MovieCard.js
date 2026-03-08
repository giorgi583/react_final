import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div key={movie.id} className='moviecard'>
      <button className='viewmore'>view more <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
<h3>{movie.title}</h3>
<p>{movie.description}</p>
<p className='year'>year: {movie.year}</p>
<p className='genre'>genre: {movie.genre}</p>
<button>Add to Favorites</button>
    </div>
  )
}

export default MovieCard