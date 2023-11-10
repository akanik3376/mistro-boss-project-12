import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../MainLayout/Main";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/HompPage/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    },
]);