import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </BrowserRouter>,
);

