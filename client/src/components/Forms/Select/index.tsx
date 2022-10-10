import './style.scss';

type Props = {
  title: string,
  name: string,
  options: {
    value: string, label: string,
  }[],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function index({ title, name, options, onChange }: Props) {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{title}</label>

      <select role={name} name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option aria-label={option.label} key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

