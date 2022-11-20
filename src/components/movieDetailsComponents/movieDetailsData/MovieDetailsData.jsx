import React from 'react'
import './_movieDetailsData.css'
import Loader from '../../loader/Loader';

const MovieDetailsData = ({details, loading}) => {
  return (
    <React.Fragment>
        {
            loading ? (
                <Loader
                height={30} 
                skeletonWidth={350}
                count={8}
                skeletonMargin={'1rem 4px'}
                array={1} 
                 />
            ) : (
                <section className='movieDetailsData'>
                    <div className='movieDetailsData__heading'>
                        <h2>{details?.Title}</h2>
                        <h3>{`IMDb Rating : ${details?.imdbRating} ⭐`}</h3>
                    </div>
                    <div className='movieDetailsData__duration'>
                        <h3>{`Year : ${details?.Year}`}</h3>
                        <h3>{`Duration : ${details?.Runtime}`}</h3>
                        <h3>{`Rated : ${details?.Rated}`}</h3>
                    </div>
                    <div className='movieDetailsData__overview'>
                        <h2>{`Overview`}</h2>
                        <p>{details?.Plot}</p>
                    </div>
                    <div className='movieDetailsData__starring'>
                        <div className='movieDetailsData__starring__heading'>
                            <h3>{`Starring`}</h3>
                        </div>
                        <div className='movieDetailsData__starring__actors'>
                            {
                                details?.Actors?.split(',')?.map(item =>(
                                    <div className='movieDetailsData__starring__name'>
                                        <p>{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='movieDetailsData__director'>
                        <div className='movieDetailsData__director__heading'>
                            <h3>{`Director`}</h3>
                        </div>
                        <div className='movieDetailsData__director__list'>
                            {
                                details?.Director?.split(',')?.map(item =>(
                                    <div className='movieDetailsData__director__name'>
                                        <p>{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='movieDetailsData__genre'>
                        <div className='movieDetailsData__genre__heading'>
                            <h3 style={{marginRight:'18px'}}>{`Genre`}</h3>
                        </div>
                        <div className='movieDetailsData__genre__list'>
                            {
                                details?.Genre?.split(',')?.map(item =>(
                                    <div className='movieDetailsData__genre__name'>
                                        <p>{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='movieDetailsData__ratingHeading'>
                        <h3>{`Ratings`}</h3>
                    </div>
                    {
                        details?.Ratings && details?.Ratings?.length > 0 ? details?.Ratings?.map(({Source, Value}) => (
                            <div className='movieDetailsData__ratings'>
                                <p>{Source}</p>
                                <p className='movieDetailsData__ratings__value'>{Value}</p>
                            </div>
                        )) : (
                            <p>{`N/A`}</p>
                        )
                    }
                </section>
            )
        }
    </React.Fragment>
  )
}

export default MovieDetailsData