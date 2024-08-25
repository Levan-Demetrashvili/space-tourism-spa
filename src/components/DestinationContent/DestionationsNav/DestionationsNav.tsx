import { Link, useSearchParams } from 'react-router-dom';
import styles from './DestionationsNav.module.css';

export default function DestionationsNav() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className={styles.destinationNav}>
      <Link className={`nav-link ${name === 'moon' ? 'active' : ''}`} to="?name=moon">
        <p> moon</p>
      </Link>
      <Link className={`nav-link ${name === 'mars' ? 'active' : ''}`} to="?name=mars">
        <p>mars </p>
      </Link>
      <Link className={`nav-link ${name === 'europa' ? 'active' : ''}`} to="?name=europa">
        <p> europa</p>
      </Link>
      <Link className={`nav-link ${name === 'titan' ? 'active' : ''}`} to="?name=titan">
        <p>titan </p>
      </Link>
    </div>
  );
}
