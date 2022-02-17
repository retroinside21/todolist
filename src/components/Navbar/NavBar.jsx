import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__logo">Logo.</div>
                <ul className="nav__list">
                    <li className="nav__link"><NavLink to="/" >Main</NavLink></li>
                    <li className="nav__link"><NavLink to="/todolist">Todo</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar