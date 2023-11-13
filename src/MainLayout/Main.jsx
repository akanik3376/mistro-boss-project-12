import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    // console.log(location)

    const noNavbar = location.pathname.includes('register') || location.pathname.includes('login')

    return (
        <div>
            {
                noNavbar || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                noNavbar || <Footer></Footer>
            }
        </div>
    );
};

export default Main;