import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Comments from '../components/Comments'
import '../css/movieDetail.css'
const MovieDetail = () => {
  const {id} = useParams()
  const token = localStorage.getItem("token")
  const [product, setProduct] = useState({})
  async function getProduct() {
   try { const response = await axios.get(`https://warrior.ge/api/movies/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    console.log(response.data);
  }
  catch(error) {
    console.log(error);
    
  }
}
  useEffect(()=> {
    getProduct()
  },[])

  
  return (
    <div className='main'>
      <div className='container'>
        <h1>More Details</h1>
        <div className='Movie-details'>
          <div className='movie-image'>Movie image</div>
          <div className='movie-info'>
            <div className="desc">
            <h3>title:</h3>
            <strong>description:</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quis doloribus tempore accusamus asperiores sit nisi facilis, tenetur rerum! Modi vitae </p>
            </div>
            <div className='yrgnr'>
            <i>Release year: 1999</i>
            <p>genre:</p>
            
            </div>
          </div>
          <details>
              <summary><strong>More details</strong></summary>
              <p>imdbRating: 8.8</p>
              <p>imdbVotes: 455555555</p>
            </details>
        </div>
      <Comments/>
      </div>
    </div>
  )
}

export default MovieDetail