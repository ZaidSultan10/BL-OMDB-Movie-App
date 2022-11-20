import React, { Fragment } from 'react'
import './_movieDetailsPoster.css'
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieDetailsPoster = ({poster, title, loading}) => {
    console.log('loadinhg ---- ',loading)
  return (
    <Fragment>
        {
            loading ? (
                <SkeletonTheme color="grey" highlightColor="#444">
                    <section>
                        <Skeleton height={500} width={400} />
                    </section>
                </SkeletonTheme>
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