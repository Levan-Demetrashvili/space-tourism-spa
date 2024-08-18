import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import { useMedia } from '../../contexts/MediaContext';

export default function PageNav() {
  const { isTablet, isMobile } = useMedia();
  const isSmallDevice = isTablet || isMobile;

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="./assets/shared/logo.svg" alt="logo icon" />
        <hr />
      </div>
      <div className={styles.nav}>
        <NavLink className="nav-link" to="/">
          {!isSmallDevice && <span>00</span>} HOME
        </NavLink>
        <NavLink className="nav-link" to="destinations">
          {!isSmallDevice && <span>01</span>} DESTINATION
        </NavLink>
        <NavLink className="nav-link" to="crew">
          {!isSmallDevice && <span>02</span>} CREW
        </NavLink>
        <NavLink className="nav-link" to="technology">
          {!isSmallDevice && <span>03</span>} TECHNOLOGY
        </NavLink>
      </div>
    </header>
  );
}
