import { Routes, Route } from 'react-router-dom';
import { useAppTitle } from './hooks/useAppTitle';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import PageNav from './components/PageNav/PageNav';

export default function App() {
  useAppTitle();
  return (
    <>
      <PageNav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </>
  );
}
