import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import styles from './Destination.module.css';
import DestionationsNav from '../DestionationsNav/DestionationsNav';

export default function Destination() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data } = useFetchData('http://localhost:8000/destinations');

  const name = searchParams.get('name');
  const destination = data.find(d => d.name.toLowerCase() === name.toLowerCase());

  useEffect(() => {
    if (!name) navigate('?name=moon');
  }, [navigate, name]);

  if (!destination) return <h1>Loading ...</h1>;

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
