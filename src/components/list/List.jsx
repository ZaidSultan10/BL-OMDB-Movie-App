import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../loader/Loader'
import Card from './card/Card'
import './_list.css'

const List = () => {
    const {movieData, loading} = useSelector(state => state?.movies)
  return (
    <React.Fragment>
        {
            loading ? (
                <Loader 
                height={200}
                skeletonWidth={235}
                count={4}
                skeletonMargin={'1rem'}
                array={4}
                display={'flex'} 
                alignItems={'center'}
                width={'100%'}
                margin={'0 auto'} />
                
            ) : (
                <section className='list'>
                    {
                        movieData && movieData?.Response === 'False' && movieData.Error ? (
                            <h2>{movieData.Error}</h2>
                        ) : (
                            <React.Fragment>
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
                                {
                                    movieData && movieData['Search'] && movieData['Search'].length && movieData && movieData['Search'] && movieData['Search'].filter(item => item.Type === 'game').length > 0 &&
                                    (
                                        <h3 className='list__type__game'>{'Games'}</h3>
                                    )
                                }
                                <div className='list__games'>
                                    {movieData && movieData['Search'] && movieData['Search'].length && (
                                        movieData['Search'].map(({Title, Poster, Year, Type, imdbID}) => (
                                            Type === 'game' && (
                                                <div className='list__games'>
                                                    <Card Title = {Title} Poster = {Poster} Year = {Year} imdbID = {imdbID} />
                                                </div>
                                            )
                                        ))
                                    )}
                                </div>
                            </React.Fragment>
                        )
                    }
                </section>
            )
        }
    </React.Fragment>
  )
}

export default List