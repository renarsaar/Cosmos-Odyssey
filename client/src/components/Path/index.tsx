import './style.scss';

type Props = {
  path: string[]
};

export default function index({ path }: Props) {
  return (
    <div className='path'>
      {path.map((planet) => (
        <h1 key={planet} className='planet'>
          {planet}
          <i>-</i>
        </h1>
      ))}
    </div>
  )
}