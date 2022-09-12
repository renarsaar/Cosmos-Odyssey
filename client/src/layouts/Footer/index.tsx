import GitHubSvg from '../../assets/svg/github.svg';
import './footer.scss';

export default function index() {
  return (
    <footer>
      <h1>Author: Renar Saaremets</h1>

      <img src={GitHubSvg} alt='Github' />

      <a href="https://github.com/renarsaar/Cosmos-Odyssey" target="_blank" rel="noreferrer">
        github.com/renarsaar/Cosmos Odyssey
      </a>
    </footer>
  );
}
