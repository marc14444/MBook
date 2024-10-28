
import React, { useState } from 'react';
import s from './style.module.css';
import logo from 'assets/images/logo.jpg';
import { Search as SearchIcon, Cart2 } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu déroulant

  return (
    <div>
      <nav className={`${s.navbar} ${menuOpen ? s.active : ''}`}>
        <a href="#" className={s.logo}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '60px', height: '60px' }}
          />
          <h1>MBook</h1>
        </a>
        <button
          className={s.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className={s.seachBar}>
          <input type="text" placeholder="Rechercher..." />
          <SearchIcon size={25} className={s.icon} aria-label="Search" />
        </div>
        <ul className={menuOpen ? s.menuOpen : ''}>
          <li>
            <NavLink to="/" activeClassName={s.active}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/livres" activeClassName={s.active}>Livres</NavLink>
          </li>
          <li>
            <NavLink to="/magazines" activeClassName={s.active}>Magazines</NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeClassName={s.active}>Catégories</NavLink>
          </li>
          <li>
            <NavLink to="/compte" activeClassName={s.active}>Compte</NavLink>
          </li>
          <li>
            <NavLink to="/panier" activeClassName={s.active}>
              <Cart2 size={40} aria-label="Panier" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
