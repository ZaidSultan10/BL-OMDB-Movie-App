import React from 'react'
import "./_card.css"
import {getMovieDetails} from '../../../actions/movies'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Card = ({Title, Poster, Year, imdbID}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleMovieDetails = () => {
        console.log('imdbID ---- ',imdbID)
        dispatch(getMovieDetails(imdbID))
        navigate(`/details/${imdbID}`)
    }
  return (
    <section className='card'>
        <div className='card__poster'>
            <img onClick={handleMovieDetails} src={Poster} alt={Title} />
        </div>
        <div className='card__details'>
            <h3 color='white'>{Title}</h3>
            <h4>{`Year : ${Year?.replace('–','')}`}</h4>
        </div>
    </section>
  )
}

export default Card