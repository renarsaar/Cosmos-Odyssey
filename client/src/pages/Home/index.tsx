import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ImageMap from '../../components/ImageMap';
import SelectPathsForm from '../../components/SelectPathsForm';
import PossiblePaths from '../../components/PossiblePaths';

import './style.scss';
import { ToastContainer } from 'react-toastify';

export default function index() {
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
