import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './services/store';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
     <React.StrictMode>
          <BrowserRouter>
               <Provider store={store}>
                    <DndProvider backend={HTML5Backend}>
                         <App />
                    </DndProvider>
               </Provider>
          </BrowserRouter>
     </React.StrictMode>
);
