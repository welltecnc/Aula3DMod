import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Sobre from './routes/Sobre.jsx';
import Contato from './routes/Contato.jsx';
import Login from './routes/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/contato', element: <Contato /> },
      {path:'/login',element:<Login/>},

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
