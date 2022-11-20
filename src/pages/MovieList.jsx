import React, { useEffect, useState } from 'react'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import { useDispatch } from 'react-redux'
import { getMovieData } from '../actions/movies'
import List from '../components/list/List'
import Categories from '../components/banner/categories/Categories'

const MovieList = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('Inception')
    useEffect(() => {
        dispatch(getMovieData(search))
    },[dispatch])
  return (
    <main>
        <Header />
        <div className='movieList__banner' style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <Banner />
            <Categories />
        </div>
        <List />
    </main>
  )
}

export default MovieList