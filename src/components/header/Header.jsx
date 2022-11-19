import React, { useState } from 'react'
import './_header.css'
import Logo from '../../assets/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell, faCommentDots } from '@fortawesome/free-regular-svg-icons'

const Header = () => {

    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

  return (
    <section className='header'>
        <div className='header__container'>
            <div className='header__container__left'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='header__container__center'>
                <input placeholder='Search...' name='search' onChange={handleChange} value={searchValue} className='header__container__center__search' />
            </div>
            <div className='header__container__right'>
                <FontAwesomeIcon className='header__container__right__bell' icon={faBell} />
                <FontAwesomeIcon className='header__container__right__message' icon={faCommentDots} />
            </div>
        </div>
    </section>
  )
}

export default Header