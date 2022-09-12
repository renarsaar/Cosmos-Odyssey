import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../hooks/useRedux';
import { Link, useNavigate } from 'react-router-dom';
import { selectValidUntil } from '../../state/priceList/priceListSlice';

import { postReservation } from '../../api/Reservation';
import { ReservationFlight } from '../../interfaces/Reservation';
import './style.scss';
import { ToastContainer } from 'react-toastify';
import { showToast } from '../../lib/toast';
import { AxiosError } from 'axios';


type Props = {
  priceListId: string,
  flights: {
    [key: string]: ReservationFlight,
  },
  duration: number,
  price: number,
};

type FormData = {
  firstName: string,
  lastName: string,
};

export default function index({
  priceListId, flights, duration, price
}: Props) {
  const navigate = useNavigate();
  const priceListValidUntil = useAppSelector(selectValidUntil);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    const currentTime = moment().utc();
    const validUntilDate = moment(priceListValidUntil);

    if (currentTime.isAfter(validUntilDate)) {
      showToast('error', 'Price list has been updated. Please refresh the page and select new Routes', false);

      return;
    }

    const reservation = {
      ...data,
      priceListId,
      flights,
      duration,
      price,
    };

    postReservation(reservation)
      .then((response) => {
        showToast('success', 'Reservation created successfully', 10000);
      })

      .catch((error: AxiosError) => showToast('error', error.message, false));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='create-reservation-form'>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <p>First name is required.</p>}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
      </div>

      <input type="submit" className='btn' value='Create Reservation' />

      <Link to='/' className='btn'>Cancel</Link>

      <ToastContainer />
    </form>
  );
}
