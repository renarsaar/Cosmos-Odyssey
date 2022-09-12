import { getAxios, postAxios } from '../lib/axiosClient';
import { Reservation } from '../interfaces/Reservation';

// Get Reservations
async function getReservations() {
  return await getAxios('/api/v1/reservations');
}

// Post New Reservation
async function postReservation(body: Reservation) {
  return await postAxios('/api/v1/reservations', body);
}

export { getReservations, postReservation };
