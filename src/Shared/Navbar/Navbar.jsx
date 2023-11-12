import { Link } from "react-router-dom";



const Navbar = () => {

    const navLinks = <>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>

    </>

    return (
        <div className="navbar bg-black fixed z-10 max-w-5xl mx-auto bg-opacity-40 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-40 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="">
                        <h1 className=" font-extrabold">
                            BISTRO BOSS
                        </h1>
                        <p className="uppercase flex gap-1 font-bold">Restaurant</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;