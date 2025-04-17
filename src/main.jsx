import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './landingPage/LandingPage.jsx'
import Platform from "./Platform.jsx";
import './index.css';
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {path: '/', exact: true, element: <LandingPage />},
    {path: '/platform', element: <Platform />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
