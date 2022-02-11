import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const handleMenu = () => {
    setVisibleMenu(prev => !prev)
  }
  return (
    <nav>
      <div className='wrapper'>
        <GiHamburgerMenu
          onClick={handleMenu}
          className='menu-btn'
          size={30}
          color='pink'
          cursor={'pointer'}
        />
        <div className={visibleMenu ? 'links opened' : 'links closed'}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
