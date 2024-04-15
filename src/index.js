import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout';
import LayoutApp from './LayoutApp';
import About from './pages/About/About';
import Departments from './pages/Departments/Departments';
import Doctor from './pages/FindADoctor/Doctor';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home./Home';
import Profile from './pages/profile/Profile';
import Clinic from './pages/clinic/Clinic';
import GetData from './components/getDataAppointment/GetData';

import Information from './components/Information/Information';
import ConfiramtionAll from '../src/components/Confirmation/ConfiramtionAll'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
    >
      <Route
        path=''
        element={<Home />}
      />
      <Route
        path='/about'
        element={<About />}
      />
      <Route path='/doctor'>
        <Route
          index
          element={<Doctor />}
        />
        <Route
          path=':profile'
          element={<Profile />}
        />
      </Route>
      <Route path='/departments'>
        <Route
          path=''
          element={<Departments />}
        />
        <Route
          path=':clinic'
          element={<Clinic />}
        />
      </Route>

      <Route
        path='/appointment'
        element={ <LayoutApp />}
      >
        <Route
          index
          element={<GetData />}
        />

        <Route
          path=':information'
          element={<Information />}
        />
        <Route
          path='confirmation'
          element={<ConfiramtionAll />}
        />
      </Route>
      <Route
        path='/contact'
        element={<Contact />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
