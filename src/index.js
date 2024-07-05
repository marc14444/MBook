import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'App';
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
