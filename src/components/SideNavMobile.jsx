import React from 'react'

const SideNavMobile = ({ isOpen }) => {
  return (
    <div className={`side-nav-container ${isOpen ? 'open' : ''}`}>
      <nav className='side-nav'>
        <ul className='side-nav-list'>
          <li className='side-nav-list-item'>
            <a href='#'>Home</a>
          </li>
          <li className='side-nav-list-item'>
            <a href='#'>Become a Knight</a>
          </li>
          <li className='side-nav-list-item'>
            <a href='#'>Programs</a>
          </li>
          <li className='side-nav-list-item'>
            <a href='#'>Things to Do</a>
          </li>
          <li className='side-nav-list-item'>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideNavMobile
