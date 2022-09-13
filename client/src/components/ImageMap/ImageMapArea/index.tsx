import { useSearchParams } from 'react-router-dom';

type Props = {
  planet: string,
  height: number,
  width: number,
  top: number,
  left: number,
}

export default function index({ planet, height, width, top, left }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  function onClick() {
    const departure: string = searchParams.get('departure') ?? '';
    const destination: string = searchParams.get('destination') ?? '';

    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set('departure', departure);
    updatedSearchParams.set('destination', destination);

    switch (true) {
      case (departure === planet):
        updatedSearchParams.set('departure', '');
        break;

      case (destination === planet):
        updatedSearchParams.set('destination', '');
        break;

      case (departure === ''):
        updatedSearchParams.set('departure', planet);
        break;

      case (destination === ''):
        updatedSearchParams.set('destination', planet);
        break;

      default:
        updatedSearchParams.set('destination', planet);
        break;
    }

    setSearchParams(updatedSearchParams.toString());
  }

  return (
    <div className='area' onClick={onClick} style={{ height, width, top, left }} />
  );
}
