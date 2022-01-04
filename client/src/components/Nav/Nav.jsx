import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/landings'>Landings</Link>
      <Link to='/neas'>NEAS</Link>
    </nav>
  )
}

export default Nav

