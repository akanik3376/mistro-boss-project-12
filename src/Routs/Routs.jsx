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
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
        ]
    }
]);