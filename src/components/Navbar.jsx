import React, { useState } from 'react'
import SideNavMobile from './SideNavMobile'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const hamburgerToggler = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen) // Toggle the isOpen state
  }
  return (
    <header className='flex-header'>
      <button
        onClick={hamburgerToggler}
        className={`hamburger ${isOpen ? 'open' : ''}`}
      >
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </button>
      <SideNavMobile isOpen={isOpen} />
      <h1 className='logo-heading'>
        <a className='logo-heading-link'>
          <div className='logo'>
            <img
              className='logo-image'
              src='/assets/KofC.png'
              alt='Knights of Columbus Logo'
            />
          </div>
          Salem CSL
        </a>
      </h1>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-list-item'>
            <a href='#'>Become a Knight</a>
          </li>
          <li className='nav-list-item'>
            <a href='#'>Programs</a>
          </li>
          <li className='nav-list-item'>
            <a href='#'>Things to Do</a>
          </li>
          <li className='nav-list-item'>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
