import React from 'react'
import "./_card.css"
import Logo from '../../../assets/logo.png'

const Card = ({Title, Poster, Year, imdbID}) => {
    const handleMovieDetails = () => {
        console.log('imdbID ---- ',imdbID)
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