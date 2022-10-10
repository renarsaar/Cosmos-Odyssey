import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import { createStore } from '../state/store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';


test('renders learn react link', () => {
  // render(
  //   <Provider store={createStore()}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // );

  // expect(getByText(/learn/i)).toBeInTheDocument();
});




// const server = setupServer(

// );
// describe('Test API call', () => {
//   // const { getByText } = render(
//   //   <Provider store={store}>
//   //     <App />
//   //   </Provider>
//   // );

//   // expect(getByText(/cosmos/i)).toBeInTheDocument();

//   // it('Fetching data is successful', async () => {
//   //   render(
//   //     <Provider store={store}>
//   //       <App />
//   //     </Provider>
//   //   );
//   //   const output = await waitFor(() => screen.findByRole('heading', {
//   //     name: /cosmos odyssey/i
//   //   }))

//   //   expect(output).toBeInTheDocument();

//   // });

// });
