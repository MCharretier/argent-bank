import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import argentBankLogo from '../../assets/images/argentBankLogo.png'
 
function Header() {
    return (
        <header>
            <nav className={styles.mainNav}>
                <NavLink to="/" className={styles.mainNavLogo}>
                    <img className={styles.mainNavLogoImage} src={argentBankLogo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink className={styles.mainNavItem} to="/profile"><i className="fa fa-user-circle"></i> Tony</NavLink>
                    <NavLink className={styles.mainNavItem} to="/login"><i className="fa fa-user-circle"></i> Sign In</NavLink>
                    <NavLink className={styles.mainNavItem} to="/login"><i className="fa fa-sign-out"></i> Sign Out</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header