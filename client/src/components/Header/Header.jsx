import React from 'react'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="nasa logo" width={300}/>
      <Nav/>
    </header>
  )
}

export default Header

