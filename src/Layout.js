import Header from './pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer/Footer';

const Layout = ({ removeCookies }) => {
  return (
    <>
      <Header removeCookies={removeCookies} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
