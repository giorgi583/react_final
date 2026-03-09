import axios from 'axios'
import React from 'react'

const MovieCard = ({movie}) => {
  async function handleAddtoFav(id) {
    const endpoint = 'https://warrior.ge/api/favorites'
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post(endpoint, {
        "movie_id" : id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    alert("Added to favourites successfully")
    }
    catch(error) {
      alert(error)
    }
  }
  return (
    <div key={movie.id} className='moviecard'>
      <button className='viewmore'>view more <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
<h3>{movie.title}</h3>
<p>{movie.description}</p>
<p className='year'>year: {movie.year}</p>
<p className='genre'>genre: {movie.genre}</p>
<button onClick={()=>handleAddtoFav(movie.id)}>Add to Favorites</button>
    </div>
  )
}

export default MovieCard