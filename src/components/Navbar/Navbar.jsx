import s from './style.module.css'
import logo from "assets/images/logo.jpg"
import { Search as SearchIcon } from "react-bootstrap-icons"
import { Cart2 } from 'react-bootstrap-icons'
export function Navbar() {
  return (
    <div>
      <nav className={s.navbar}>
        <a href="#" className={s.logo}>
          <img src={logo} alt="Logo" style={{
            width: "60px",
            height: "60px",
            }} />
            <h1>MBook</h1>
        </a>
        <div className={s.seachBar}>
             <input type="text" placeholder="Rechercher..." />
             <SearchIcon
                size={25}
                className={s.icon} 
            />
        </div>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Livres</a>
          </li>
          <li>
            <a href="#">Magazines</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Compte</a>
          </li>
          <li>
            <a href="#"><Cart2
              size={50}
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}