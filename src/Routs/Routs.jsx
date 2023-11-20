import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../MainLayout/Main";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/HompPage/Home";
import Menu from "../Pages/MenuPage/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import PrivetRoot from "./PrivetRoot";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Pages/DashboardPages/Cart/Cart";
import AllUsers from "../Pages/DashboardPages/AllUsers/AllUsers";
import AddItems from "../Pages/DashboardPages/AddItems/AddItems";
import AdminRoot from "./AdminRoot";
import ManageItem from "../Pages/DashboardPages/ManageItem/ManageItem";
import Update from "../Pages/DashboardPages/UpdateItem/Update";
import Payment from "../Pages/DashboardPages/Payment/Payment";
import PaymentHistory from "../Pages/DashboardPages/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/DashboardPages/AdminHome/AdminHome";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/menu',
                element: <Menu></Menu>,
            },
            {
                path: '/order/:category',
                element: <PrivetRoot><Order></Order></PrivetRoot>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoot><Dashboard></Dashboard></PrivetRoot>,
        errorElement: <Error></Error>,
        children: [
            //users roots
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'pay',
                element: <Payment></Payment>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },


            // admin roots
            {
                path: 'admin-home',
                element: <AdminRoot><AdminHome></AdminHome></AdminRoot>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addItems',
                element: <AdminRoot><AddItems></AddItems></AdminRoot>
            },
            {
                path: 'manageItems',
                element: <AdminRoot><ManageItem></ManageItem></AdminRoot>
            },
            {
                path: 'update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }
]);