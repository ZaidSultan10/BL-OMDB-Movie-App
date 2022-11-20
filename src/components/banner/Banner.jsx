import React from 'react'
import './_banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Categories from './categories/Categories';
import { useSelector } from 'react-redux';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loader from '../loader/Loader';

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
    const {movieData,loading} = useSelector(state => state?.movies)
    return (
      <React.Fragment>
        {
            loading ? (
                <Loader 
                height={300} 
                skeletonWidth={730} 
                skeletonMargin={'0 1rem'} 
                display={'flex'} 
                alignItems={'center'}
                width={'100%'}
                margin={'0 auto'}
                array={1} />
            ) : 
            (
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
                    {/* <div className='banner__category'>
                        <Categories />
                    </div> */}
                </section>
            )
        }
      </React.Fragment>
    );
}

export default Banner