import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            // console.log(res)
            return res.data
        }
    },)

    return (
        <div>
            <SectionTitle subHeading='---At a Glance!---'
                heading='PAYMENT HISTORY'
            ></SectionTitle>
            <h2 className="text-3xl font-semibold my-6">Total Payments: {payments?.length}</h2>

            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead className="bg-yellow-500 w-full">

                        <tr className="text-xl font-normal text-white">
                            <th></th>
                            <th>EMAIL</th>
                            <th>CATEGORY</th>
                            <th>TOTAL PRICE</th>
                            <th>PAYMENT DATE</th>
                            <th>STATUS</th>



                        </tr>
                    </thead>
                    {
                        payments?.map((item, index) => <tbody key={index}>
                            {/* row 1 */}
                            <tr className="text-base">
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <p>{item?.email}</p>
                                </td>
                                <td>
                                    <p className="font-bold">{item?.name}</p>
                                </td>
                                <td>
                                    <p> $ {item?.price}</p>
                                </td>

                                <td>
                                    <p>{item?.date}</p>
                                </td>
                                <td>
                                    <p className="text-green-700">{item?.status}...</p>
                                </td>

                            </tr>
                        </tbody>)
                    }
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;