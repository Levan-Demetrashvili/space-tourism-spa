import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src='./assets/shared/logo.svg' alt='logo icon' />
        <hr />
      </div>
      <div className={styles.nav}>
        <NavLink className='nav-link' to='/'>
          <span>00</span> HOME
        </NavLink>
        <NavLink className='nav-link' to='/destinations'>
          <span>01</span> DESTINATION
        </NavLink>
        <NavLink className='nav-link' to='/crew'>
          <span>02</span> CREW
        </NavLink>
        <NavLink className='nav-link' to='/technology'>
          <span>03</span> TECHNOLOGY
        </NavLink>
      </div>
    </header>
  );
}
