
import { Outlet } from "react-router-dom";
import HeaderApp from "./components/headerAppointment/HeaderApp";
const LayoutApp = () => {
    return (
        <>
            <HeaderApp />
            <Outlet />
        </>
  );
};

export default LayoutApp;
