import { useGetData } from '../../../hooks/useGetData';
import DestionationsNav from '../DestionationsNav/DestionationsNav';
import Loader from '../../Loader/Loader';
import styles from './Destination.module.css';

import { BASE_API_URL } from '../../../config/config';

export default function Destination() {
  const destination = useGetData(BASE_API_URL + 'destinations', 'moon');

  if (!destination) return <Loader />;

  return (
    <div className={styles.destination}>
      <div className={styles.imgWrapper}>
        <img src={destination.images.webp} alt={destination.name} />
      </div>
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
