import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './services/store';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <React.StrictMode>
          <BrowserRouter>
               <Provider store={store}>
                    <App />
               </Provider>
          </BrowserRouter>
     </React.StrictMode>
);
