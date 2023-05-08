import React from 'react'
import "./styles.css"
import MenuToggle from '../../objects/MenuToggle';
import Sobre from '../../objects/Sobre';
import Logo from '../../objects/Logo';

const Header = () => {
  return (
    <header className="main-header">
      <Logo />
      <div className="container-header">
      <Sobre />
      <MenuToggle />
      </div>
    </header>
  )
}

export default Header;