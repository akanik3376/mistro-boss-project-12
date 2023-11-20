import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCar, FaMoneyCheckAlt, FaShapes, FaUsers } from "react-icons/fa";
import BarChartt from "./BarChartt";
import PayChrt from "./PayChrt";

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')

            return (res.data)

        }
    })

    // for graph chat
    const { data: orderStats = [] } = useQuery({
        queryKey: ['order-state'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-state')

            return (res.data)

        }
    })
    console.log(orderStats)

    return (
        <div>
            <h1 className="text-3xl font-semibold my-6">Hi, Welcome {user ? user.displayName : 'Back'}!</h1>

            <div className="stats shadow text-white">

                <div className="stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div className="stat-figure text-white">
                        <FaMoneyCheckAlt className="text-3xl "></FaMoneyCheckAlt>
                    </div>

                    <div className="stat-value text-center">{stats?.revenue}</div>
                    <div className="stat-title uppercase text-white font-medium">Revenue</div>
                </div>

                <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">

                    <div className="stat-value  text-center">{stats?.users}</div>
                    <div className="stat-title uppercase text-white font-medium"> Customers</div>
                    <div className="stat-figure t text-white">
                        <FaUsers className="text-3xl "></FaUsers>
                    </div>

                </div>

                <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="stat-figure t text-white">
                        <FaShapes className="text-3xl "></FaShapes>
                    </div>

                    <div className="stat-value  text-center">{stats?.menuItem}</div>
                    <div className="stat-title uppercase text-white font-medium">Menu</div>
                </div>

                <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div className="stat-figure text-white ">
                        <FaCar className="text-3xl "></FaCar>
                    </div>

                    <div className="stat-value  text-center">{stats?.orders}</div>
                    <div className="stat-title uppercase text-white font-medium">Orders</div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between mt-12">
                <div className="w-1/3">
                    <BarChartt orderStats={orderStats}></BarChartt>
                </div>
                <div className="w-1/3">
                    <PayChrt orderStats={orderStats}></PayChrt>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;