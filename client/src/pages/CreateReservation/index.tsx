import moment from 'moment';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import { useNavigate } from 'react-router-dom';
import { selectCartPath, selectCartFlights } from '../../state/cart/cartSlice';
import { selectPriceListId } from '../../state/priceList/priceListSlice';

import Reservation from '../../components/Reservation.tsx';
import CreateReservationForm from '../../components/CreateReservationForm';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import './style.scss';

export default function index() {
  const navigate = useNavigate();
  const path = useAppSelector(selectCartPath);
  const flights = useAppSelector(selectCartFlights);
  const priceListId = useAppSelector(selectPriceListId) ?? '';

  const [duration, setDuration] = useState<number>(-1);
  const [price, setPrice] = useState<number>(-1);
  const [journeyStart, setJourneyStart] = useState<Date>();
  const [journeyEnd, setJourneyEnd] = useState<Date>();

  useEffect(() => {
    if (path.length === 0 && Object.keys(flights).length === 0) {
      return navigate('/');
    } else {
      setPrice(Object.values(flights).reduce((acc, cv) => acc += cv.provider?.price ?? 0, 0));
      setJourneyStart(Object.values(flights)[0].provider?.flightStart);
      setJourneyEnd(Object.values(flights)[Object.values(flights).length - 1].provider?.flightEnd);

      setDuration(moment(journeyEnd).diff(moment(journeyStart)));
    }
  }, [journeyStart, journeyEnd]);

  return (
    <div className='create-reservation'>
      <Header />

      <div className='container'>
        <div className='components'>
          <Reservation
            path={path}
            flights={flights}
            flightStart={journeyStart}
            flightEnd={journeyEnd}
            price={price}
          />

          <CreateReservationForm
            priceListId={priceListId}
            flights={flights}
            duration={duration}
            price={price}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
