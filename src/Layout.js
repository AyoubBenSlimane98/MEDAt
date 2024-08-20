import Header from './pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header  />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
