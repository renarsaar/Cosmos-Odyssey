import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreateReservation from '../pages/CreateReservation';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/reservations/create' element={<CreateReservation />} />
    </Routes>
  );
}
