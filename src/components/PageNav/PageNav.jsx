import { NavLink } from 'react-router-dom';
import { useMedia } from '../../contexts/MediaContext';
import styles from './PageNav.module.css';

export default function PageNav() {
  const { isTablet, isMobile } = useMedia();
  const isSmallDevice = isTablet || isMobile;

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="./assets/shared/logo.svg" alt="logo icon" />
        <hr />
      </div>
      {isMobile ? <img src="/assets/shared/icon-hamburger.svg" alt="borger menu icon" /> : <Nav isSmallDevice={isSmallDevice} />}
    </header>
  );
}

function Nav({ isSmallDevice }) {
  return (
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
  );
}
