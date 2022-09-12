import ImageMapArea from '../ImageMapArea';
import ImageMapTip from '../ImapeMapTip';

import './style.scss';
import solarsystem from '../../assets/images/solarsystem.jpg';

type planetStylingTypes = {
  [key: string]: {
    width: number,
    height: number,
    top: number,
    left: number,
  }
}

const planetsPositioning: planetStylingTypes = {
  Mercury: {
    width: 20,
    height: 20,
    top: 217,
    left: 275,
  },
  Venus: {
    width: 42,
    height: 42,
    top: 227,
    left: 344,
  },
  Earth: {
    width: 48,
    height: 48,
    top: 250,
    left: 442,
  },
  Mars: {
    width: 30,
    height: 30,
    top: 326,
    left: 510,
  },
  Jupiter: {
    width: 76,
    height: 76,
    top: 296,
    left: 587,
  },
  Saturn: {
    width: 68,
    height: 68,
    top: 272,
    left: 718,
  },
  Uranus: {
    width: 52,
    height: 52,
    top: 359,
    left: 832,
  },
  Neptune: {
    width: 54,
    height: 54,
    top: 377,
    left: 956,
  }
};

export default function index() {
  return (
    <div className='image-map'>
      <ImageMapTip />

      <div className='map'>
        {Object.keys(planetsPositioning).map((planet, index) => (
          <ImageMapArea key={index} planet={planet} {...planetsPositioning[planet]} />
        ))}

        <img src={solarsystem} alt="Planets" />
      </div>
    </div>
  );
}
