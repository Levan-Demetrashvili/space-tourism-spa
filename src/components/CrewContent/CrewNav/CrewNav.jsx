import { Link, useSearchParams } from 'react-router-dom';
import styles from './CrewNav.module.css';

export default function CrewNav() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className={styles.crewNav}>
      <Link className={name === 'Douglas Hurley' ? 'active' : ''} to="?name=Douglas Hurley">
        <div className={styles.circle}></div>
      </Link>
      <Link className={name === 'Mark Shuttleworth' ? 'active' : ''} to="?name=Mark Shuttleworth">
        <div className={styles.circle}></div>
      </Link>
      <Link className={name === 'Victor Glover' ? 'active' : ''} to="?name=Victor Glover">
        <div className={styles.circle}></div>
      </Link>
      <Link className={name === 'Anousheh Ansari' ? 'active' : ''} to="?name=Anousheh Ansari">
        <div className={styles.circle}></div>
      </Link>
    </div>
  );
}
