import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaWallet, FaRegAddressBook, FaLock, FaAddressBook, FaFileContract } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    //TO DO:
    const [isAdmin] = useAdmin()
    const [cart] = useCart()

    return (
        <div className="flex gap-12 ">
            {/* side bar */}
            <div className="w-64 bg-yellow-500 min-h-screen">
                <ul className="menu uppercase font-bold flex flex-col   space-y-2  mt-9">
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to='/dashboard/admin-home'><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'><FaAddressBook />Add items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'><FaWallet />Manage items</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manage-bookings'><FaRegAddressBook />Manage Booking</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/users'><FaShoppingCart />All users</NavLink>
                            </li>


                        </>
                            : <>

                                {/* main menu clint side */}

                                <li>
                                    <NavLink to='/user-home'><FaHome />User Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/user-reservation'><IoMdMenu />reservation</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/payment-history'><FaLock />payment history</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><IoMdMenu />My cart {cart?.length}</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user-add-review'><FaLock />add review</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/user-booking'><MdContactMail />my booking</NavLink>
                                </li>

                            </>
                    }

                    <hr className="my-5 mx-5 border" />

                    <li>
                        <NavLink to='/'><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'><IoMdMenu />Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaLock />Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'><FaFileContract />Contact</NavLink>
                    </li>
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