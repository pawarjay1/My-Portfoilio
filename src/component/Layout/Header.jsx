import { NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header>
                <div className="logo">

                </div>

                <ul className={`nav-links ${isOpen ? "show" : ''}`}>
                    <NavLink to="/" className="nav-link" onClick={closeMenu}>About Me</NavLink>
                    <NavLink to="/Skills" className="nav-link" onClick={closeMenu}>Skills</NavLink>
                    <NavLink to="/Projects" className="nav-link" onClick={closeMenu}>Projects</NavLink>
                </ul>
                
                <span>
                    <ion-icon name="menu-outline" onClick={toggleMenu} className="toggle"></ion-icon>
                </span>
                    
                
            </header>
        </>
    )
}
