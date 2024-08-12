import { useGetData } from '../../../hooks/useGetData';
import styles from './Destination.module.css';
import DestionationsNav from '../DestionationsNav/DestionationsNav';
import Loader from '../../Loader/Loader';

export default function Destination() {
  const destination = useGetData('http://localhost:8000/destinations', 'moon');

  if (!destination) return <Loader />;

  return (
    <div className={styles.destination}>
      <img src={destination.images.webp} alt={destination.name} />
      <div className={styles.destinationInfo}>
        <DestionationsNav />
        <h1>{destination.name.toUpperCase()}</h1>
        <p>{destination.description}</p>
        <hr />
        <div className={styles.stats}>
          <span>
            <small>AVG. DISTANCE</small>
            <h2> {destination.distance} </h2>
          </span>
          <span>
            <small>Est. travel time</small>
            <h2> {destination.travel} </h2>
          </span>
        </div>
      </div>
    </div>
  );
}
