import React from 'react';
import ReactDOM from 'react-dom/client';
 
import "./Main.css"
import "./Media.css"

import { RouterProvider } from 'react-router-dom';
import roots from './Roots';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roots}/>
  </React.StrictMode>
);

