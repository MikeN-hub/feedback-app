import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => {
    setShowMenu((prev) => !prev)
  }
  return (
    <nav>
      <motion.div
        className='menu-btn'
        whileHover={{ scale: 1.1, filter: 'brightness(1.1)' }}
      >
        <GiHamburgerMenu
          onClick={handleMenu}
          size={30}
          color='pink'
          cursor={'pointer'}
        />
      </motion.div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className='menu'
            initial={{ y: -20, scale: 0.1 }}
            animate={{ y: 30, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, duration: 0.4 }}
            exit={{ y: -20, scale: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.4, originX: 0 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <NavLink to='/'>
                <motion.span whileHover={{ color: 'rgb(206,210,58)' }}>
                  Home
                </motion.span>
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.4, originX: 0 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <NavLink to='/about'>
                <motion.span whileHover={{ color: 'rgb(206,210,58)' }}>
                  About
                </motion.span>
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Nav
