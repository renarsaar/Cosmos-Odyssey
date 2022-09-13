import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { showToast } from '../../lib/toast';
import { useAppDispatch } from '../../hooks/useRedux';

import { reset as resetJourney } from '../../state/journey/journeySlice';
import { reset as resetCart } from '../../state/cart/cartSlice';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ImageMap from '../../components/ImageMap';
import SelectPathsForm from '../../components/Forms/SelectPathsForm';
import PossiblePaths from '../../components/PossiblePaths';

import './style.scss';

type LocationState = {
  reservationMessage: string | null | undefined;
}

export default function index() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state)
    if (location.state !== null) {
      const { reservationMessage } = location.state as LocationState;

      showToast('success', reservationMessage ?? '', 10000);
      window.history.replaceState(undefined, document.title);

      dispatch(resetCart());
      dispatch(resetJourney());
    }
  }, []);

  return (
    <div className='home'>
      <Header />

      <div className='container'>
        <div className='components'>
          <SelectPathsForm />
          <PossiblePaths />
          <ImageMap />
        </div>
      </div>

      <Footer />

      <ToastContainer />
    </div>
  );
}
