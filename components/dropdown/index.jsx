// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import Link from 'next/link'

import React, { Component } from 'react';
// import './style.scss';

export default class Dropdown extends Component {  
  render() {
    return (
      <nav className="tab-drop nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
          <Link href="/services" className="nav-link dropdown-toggle" activeclassName="active"><a> Service</a></Link>
            <Submenu />
          </li>
        </ul>
      </nav>
    )
  }
}

class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
        <Link href="/services/wordpress-development" className="dropdown-item"><a> Wordpress </a></Link>
        </li>
        <li className="nav__submenu-item ">
        <Link href="/services/blockchain-development" className="dropdown-item"><a> Blockchain </a></Link>
        </li>
      </ul>
    )
  }
}
