import { useGetData } from '../../../hooks/useGetData';
import styles from './CrewMember.module.css';
import Loader from '../../Loader/Loader';
import CrewNav from '../CrewNav/CrewNav';

export default function CrewMember() {
  const person = useGetData('http://localhost:8000/crew', 'Douglas Hurley');
  if (!person) return <Loader />;

  return (
    <div className={styles.crewMember}>
      <div className={styles.about}>
        <p className={styles.role}>{person.role}</p>
        <h1>{person.name}</h1>
        <p className={styles.bio}>{person.bio}</p>
      </div>
      <CrewNav />
      <picture>
        <img src={person.images.webp} alt={person.name} />
      </picture>
    </div>
  );
}
