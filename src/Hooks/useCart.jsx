import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    //use tans tak query
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user?.email}`)
            return response.data
        }
    })
    return [cart, refetch]
};

export default useCart;