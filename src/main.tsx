import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/index.tsx';
import Classroom from './components/Classroom/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "learn", element: <Classroom /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
