// component --> rafce

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <Link to={'/'}> Home</Link> </li>
            <li> <Link to={'/xyz'}> About</Link> </li>
            <li> <Link to={'/abc'}> Contact</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar
