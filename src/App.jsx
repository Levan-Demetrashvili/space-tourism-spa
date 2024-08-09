import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import PageNav from "./components/PageNav/PageNav";

export default function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='destinations' element={<Destinations />} />
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}
