import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMedia } from '../../contexts/MediaContext';
import styles from './PageNav.module.css';

export default function PageNav() {
  const [isClosed, setIsClosed] = useState(true);
  const { isTablet, isMobile } = useMedia();

  const handleShow = () => setIsClosed(false);
  const handleClose = () => setIsClosed(true);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="./assets/shared/logo.svg" alt="logo icon" />
        <hr />
      </div>
      {!isMobile && <Nav isTablet={isTablet} />}
      {isMobile && isClosed && <img className={styles.navIcon} src="/assets/shared/icon-hamburger.svg" alt="show navigation icon" onClick={handleShow} />}
      {isMobile && !isClosed && <MobileNavigation onClose={handleClose} />}
    </header>
  );
}

function Nav({ isTablet }: { isTablet: boolean }) {
  return (
    <div className={styles.nav}>
      <NavLink className="nav-link" to="/">
        {!isTablet && <span>00</span>} HOME
      </NavLink>
      <NavLink className="nav-link" to="destinations">
        {!isTablet && <span>01</span>} DESTINATION
      </NavLink>
      <NavLink className="nav-link" to="crew">
        {!isTablet && <span>02</span>} CREW
      </NavLink>
      <NavLink className="nav-link" to="technology">
        {!isTablet && <span>03</span>} TECHNOLOGY
      </NavLink>
    </div>
  );
}

function MobileNavigation({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.mobileNavContainer}>
      <img src="/assets/shared/icon-close.svg" alt="close icon" onClick={onClose} />
      <div className={styles.mobileNav}>
        <NavLink className={styles.mobileNavLink} to="/">
          HOME
        </NavLink>
        <NavLink className={styles.mobileNavLink} to="destinations">
          DESTINATION
        </NavLink>
        <NavLink className={styles.mobileNavLink} to="crew">
          CREW
        </NavLink>
        <NavLink className={styles.mobileNavLink} to="technology">
          TECHNOLOGY
        </NavLink>
      </div>
    </div>
  );
}
