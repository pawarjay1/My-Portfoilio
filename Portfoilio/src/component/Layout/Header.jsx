import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
export const Header = () => {
    return (
        <>
            <header>
                <div className={styles.logo}>
                
                </div>
                <nav>
                    <NavLink to="/" className={styles["nav-link"]}>About Me</NavLink>
                    <NavLink to="/Skills" className={styles["nav-link"]}>Skills</NavLink>
                    <NavLink to="/Projects" className={styles["nav-link"]}>Projects</NavLink>
                    <ion-icon name="menu-outline"></ion-icon>
                </nav>

            </header>
        </>
    )
}
