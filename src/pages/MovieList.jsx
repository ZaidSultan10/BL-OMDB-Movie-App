import React, { useEffect, useState } from 'react'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import { useDispatch } from 'react-redux'
import { getMovieData } from '../actions/movies'
import List from '../components/list/List'

const MovieList = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('Inception')
    useEffect(() => {
        dispatch(getMovieData(search))
    },[dispatch])
  return (
    <main>
        <Header />
        <Banner />
        <List />
    </main>
  )
}

export default MovieList