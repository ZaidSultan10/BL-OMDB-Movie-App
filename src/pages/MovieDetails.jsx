import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MovieDetailsData from '../components/movieDetailsComponents/movieDetailsData/MovieDetailsData'
import MovieDetailsPoster from '../components/movieDetailsComponents/movieDetailsPoster/MovieDetailsPoster'
import {getMovieDetails} from '../actions/movies'

const MovieDetails = () => {
    const {movieDetails, loading} = useSelector(state => state?.movies)
    const params = useParams()
    const dispatch = useDispatch()
    let isMovieDetailsEmpty = false
    if(!movieDetails.length){
        isMovieDetailsEmpty = true
    }
    useEffect(() => {
        dispatch(getMovieDetails(params?.id))
    },[isMovieDetailsEmpty])
  return (
    <main className='movieDetails' style={{padding:'3rem',display:'flex', justifyContent:'space-between', border:'1px solid white',height:'100vh', width:'100%', margin:'0 auto'}}>
        <MovieDetailsPoster loading={loading} poster = {movieDetails?.Poster} title = {movieDetails?.Title} />
        <MovieDetailsData loading={loading} details = {movieDetails} />
    </main>
  )
}

export default MovieDetails