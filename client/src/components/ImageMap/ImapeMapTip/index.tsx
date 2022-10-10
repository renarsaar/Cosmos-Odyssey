import { useState } from 'react';
import lightBulbSvg from '../../../assets/svg/light-bulb.svg';

export default function index() {
  const [showTip, setShowTip] = useState(localStorage.getItem('showTip') || '');

  function hideTip() {
    localStorage.setItem('showTip', JSON.stringify(false));

    setShowTip('false');
  }

  return (
    <>
      {showTip !== 'false' && (
        <div className="tip" role='tip'>
          <div>
            <b>Tip: </b>
            Clicking on the Planet will set Departure/Destination
            <img src={lightBulbSvg} alt="Light Bulb" />
          </div>

          <button type='button' onClick={hideTip}>X</button>
        </div>
      )}
    </>
  )
}