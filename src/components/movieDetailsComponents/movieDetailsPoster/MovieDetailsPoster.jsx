import React, { Fragment } from 'react'
import './_movieDetailsPoster.css'
import Loader from '../../loader/Loader';

const MovieDetailsPoster = ({poster, title, loading}) => {

  return (
    <Fragment>
        {
            loading ? (
                <Loader
                height={500} 
                skeletonWidth={400}
                array={1}
                 />
            ) : (
                <section className='movieDetailsPoster'>
                    <img src={poster} alt={title} />
                </section>
            )
        }
    </Fragment>
  )
}

export default MovieDetailsPoster