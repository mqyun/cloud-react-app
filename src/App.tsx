import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@store/index';
import topRouter from '@src/config/router/top.router';
import { RouteRender } from '@cloud-library/components';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <RouteRender config={topRouter} />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
