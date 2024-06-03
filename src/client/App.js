import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import LayoutApp from '../LayoutApp';
import About from '../pages/About/About'
import Departments from '../pages/Departments/Departments';
import Doctor from '../pages/FindADoctor/Doctor';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home./Home';
import Profile from '../pages/profile/Profile';
import GetData from '../components/getDataAppointment/GetData';
import Information from '../components/Information/Information';
import ConfirmationAll from '../components/Confirmation/ConfiramtionAll';
import Chiroparatic from '../pages/clinic/Chiroparatic';
import General from '../pages/clinic/General';
import Laser from '../pages/clinic/Laser';
import Nutrition from '../pages/clinic/Nutrition';
import Physiotherapy from '../pages/clinic/Physiotherapy';
import Podiatry from '../pages/clinic/Podiatry';
import UrologyAndrology from '../pages/clinic/UrologyAndrology';

const App = ({ removeCookies }) => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Layout removeCookies={removeCookies} />}
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
                path='Nutrition-Clinic'
                element={<Nutrition />}
              />
              <Route
                path='Podiatry-Clinic'
                element={<Podiatry />}
              />
              <Route
                path='Urology-&-Andrology-Clinic'
                element={<UrologyAndrology />}
              />
              <Route
                path='Laser-&-Skin-Care-Clinic'
                element={<Laser />}
              />
              <Route
                path='Physiotherapy-Clinic'
                element={<Physiotherapy />}
              />
              <Route
                path='General-Medicine-Clinic'
                element={<General />}
              />
              <Route path='Chiropractic-Clinic' element={<Chiroparatic />} />
            </Route>

            <Route
              path='/appointment'
              element={<LayoutApp />}
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
                element={<ConfirmationAll />}
              />
            </Route>
            <Route
              path='/contact'
              element={<Contact />}
            />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
