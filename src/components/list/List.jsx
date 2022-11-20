import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card/Card'
import './_list.css'

const List = () => {
    const {movieData} = useSelector(state => state?.movies)
  return (
    <section className='list'>
        {
            movieData && movieData?.Response === 'False' && movieData.Error ? (
                <h2>{movieData.Error}</h2>
            ) : (
                <>
                    {
                        movieData && movieData['Search'] && movieData['Search'].length && movieData && movieData['Search'] && movieData['Search'].filter(item => item.Type === 'movie').length > 0 &&
                        (
                            <h3 className='list__type__movies'>{'Movies'}</h3>
                        )
                    }
                    <div className='list__movies'>
                        {movieData && movieData['Search'] && movieData['Search'].length && (
                            movieData['Search'].map(({Title, Poster, Year, Type, imdbID}) => (
                                Type === 'movie' && (
                                    <Card Title = {Title} Poster = {Poster} Year = {Year} imdbID = {imdbID} />
                                )
                            ))
                        )}
                    </div>
                    {
                        movieData && movieData['Search'] && movieData['Search'].length && movieData && movieData['Search'] && movieData['Search'].filter(item => item.Type === 'series').length > 0 &&
                        (
                            <h3 className='list__type__series'>{'Series'}</h3>
                        )
                    }
                    <div className='list__series'>
                        {movieData && movieData['Search'] && movieData['Search'].length && (
                            movieData['Search'].map(({Title, Poster, Year, Type, imdbID}) => (
                                Type === 'series' && (
                                    <div className='list__series'>
                                        <Card Title = {Title} Poster = {Poster} Year = {Year} imdbID = {imdbID} />
                                    </div>
                                )
                            ))
                        )}
                    </div>
                </>
            )
        }
    </section>
  )
}

export default List