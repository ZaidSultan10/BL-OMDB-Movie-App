import React from 'react'
import './_banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logo from '../../assets/logo.png'
import Categories from './categories/Categories';
import { useSelector } from 'react-redux';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
    const {movieData} = useSelector(state => state?.movies)
    return (
      <section className='banner'>
        <Slider {...settings}>
          {
            movieData && movieData.Search && movieData.Search.length ? (
                movieData.Search.map(({Poster, Title}, i) => (
                    <div className='sample'>
                        <img src={Poster} alt={`${Title}`} />
                    </div>
                ))
            ) : (
                <div className='sample'>
                    <p style={{color:'white'}}>{movieData && movieData.Error ? movieData.Error : `No results found`}</p>
                </div>
            )
          }
        </Slider>
        <div className='banner__category'>
            <Categories />
        </div>
      </section>
    );
}

export default Banner