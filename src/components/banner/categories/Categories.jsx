import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './_categories.css'
import {getMovieDataByPage} from '../../../actions/movies.js'

const Categories = () => {
    let {movieData, search} = useSelector(state => state?.movies)

    const [currentPage, setCurrentPage] = useState(1)
    const limit = 10
    const dispatch = useDispatch()

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        // dispatch(getMovieDataByPage(currentPage, search))
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        // dispatch(getMovieDataByPage(currentPage, search))
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    useEffect(() => {
        setTimeout(() => {
            dispatch(getMovieDataByPage(currentPage, search))
        },1500)
    }, [currentPage])
  return (
    <section className='categories'>
        {
            movieData && movieData.totalResults && (
                <div className='categories__page'>
                    <p className='categories__totalResults'>{`Total results : ${movieData.totalResults}`}</p>
                </div>
            )
        }
        {movieData && movieData.Search && movieData.Search.length && (
            <p className='categories__pageResults'>{`Page results : ${movieData.Search.length}`}</p>
        ) }
        <div className='categories__prev'>
            <button onClick={prevPage} disabled={currentPage === 1}>
                {`Previous`}
            </button>
        </div>
        {movieData && movieData?.Search && movieData.Search?.length && (
            <p className='categories__pagination'>{`Page ${currentPage} of ${Math.ceil(movieData.totalResults/limit)}`}</p>
        ) }
        <div className='categories__next'>
            <button onClick={nextPage} disabled={currentPage === Math.ceil(movieData.totalResults/limit)}>
                {`Next`}
            </button>
        </div>
    </section>
  )
}

export default Categories