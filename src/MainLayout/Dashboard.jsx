import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaWallet, FaRegAddressBook, FaLock, FaAddressBook } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    //TO DO:
    const [isAdmin] = useAdmin()


    return (
        <div className="flex gap-12 ">
            {/* side bar */}
            <div className="w-64 bg-yellow-500 min-h-screen">
                <ul className="menu uppercase font-bold flex flex-col   space-y-2  mt-9">
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to='/'><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'><FaAddressBook />Add items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'><FaWallet />Manage items</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/cart'><FaRegAddressBook />Manage Booking</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/users'><FaShoppingCart />All users</NavLink>
                            </li>


                        </>
                            : <>

                                {/* main menu clint side */}

                                <li>
                                    <NavLink to='/'><FaHome />Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/menu'><IoMdMenu />Our Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/menu'><FaLock />Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/menu'><MdContactMail />Contact</NavLink>
                                </li>

                            </>
                    }

                    <hr className="my-5 mx-5 border" />
                </ul>


            </div>

            {/* dash board */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;