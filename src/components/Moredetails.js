import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
const Moredetails = ({movie}) => {
    const {t} = useTranslation()
    const [details, setdetails] = useState({})
    async function getRatings() {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?t=${movie.title}&apikey=83fe24b1`)
    setdetails(response.data)
    console.log(response.data)
    console.log(movie.title)
  } catch (error) {
    alert(error);
    
  }
}
useEffect(()=> {
    if(!movie) return;
getRatings()
},[movie])
  return (
        <details>
              <summary><strong>{t("more details")}</strong></summary>
              <p><strong>{t("actors")}:</strong> {details.Actors}</p>
              <p><strong>{t("awards")}:</strong> {details.Awards}</p>
              <p><strong>{t("country")}:</strong> {details.Country}</p>
              <p><strong>{t("director")}:</strong> {details.Director}</p>
              <p><strong>{t("writer")}:</strong> {details.Writer}</p>
              <p><strong>{t("imdbRating")}:</strong> {details.imdbRating}</p>
              <p><strong>{t("imdbVotes")}:</strong> {details.imdbVotes}</p>
            </details>
    
  )
}

export default Moredetails