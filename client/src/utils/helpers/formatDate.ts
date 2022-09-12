import moment from 'moment';

function formatDate(date: Date | undefined): string {
  return moment(date).format('MMM D, h:mm A') ?? '';
}

export { formatDate };