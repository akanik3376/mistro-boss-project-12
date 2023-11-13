/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoot = ({ children }) => {

    const { loading, user } = useAuth()
    const location = useLocation()

    if (loading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading...
        </button>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoot;