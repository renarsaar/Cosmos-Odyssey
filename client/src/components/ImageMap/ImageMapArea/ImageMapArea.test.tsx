import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../state/store';

import App from '../../App';

describe('Change state when finding paths', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )

  it('changes url params when clicking on a Planet', async () => {
    const earthBtn = await screen.findByRole('Earth');
    fireEvent.click(earthBtn);

    expect(window.location.search).toEqual('?departure=Earth&destination=')

    const jupiterBtn = await screen.findByRole('Jupiter');
    fireEvent.click(jupiterBtn);

    expect(window.location.search).toEqual('?departure=Earth&destination=Jupiter')

    fireEvent.click(earthBtn);

    expect(window.location.search).toEqual('?departure=&destination=Jupiter')

    fireEvent.click(jupiterBtn);

    expect(window.location.search).toEqual('?departure=&destination=')
  })
})
