import { Link, useSearchParams } from 'react-router-dom';
import styles from './TechnologyNav.module.css';

export default function TechnologyNav() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className={styles.technologyNav}>
      <Link className={name === 'launch vehicle' ? 'active' : ''} to="?name=launch vehicle">
        1
      </Link>
      <Link className={name === 'spaceport' ? 'active' : ''} to="?name=spaceport">
        2
      </Link>
      <Link className={name === 'space capsule' ? 'active' : ''} to="?name=space capsule">
        3
      </Link>
    </div>
  );
}
