import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    const { loading } = useAuth()
    return (
        <div>
            <div>
                {
                    loading ? <div className="flex justify-between items-center">
                        <p className="loading loading-infinity loading-md"></p>
                        <p className="loading loading-infinity loading-md"></p>
                        <p className="loading loading-infinity loading-md"></p>
                    </div> :
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl">Total Product: {cart?.length}</h1>
                            <h1 className="text-3xl">Total Price: ${totalPrice ? totalPrice : '00'}</h1>
                            {
                                cart?.length ? <Link to='/dashboard/pay'>
                                    <button className="btn font-bold bg-yellow-500">Pay</button>
                                </Link>
                                    : <button disabled className="btn font-bold bg-yellow-500">Pay</button>
                            }
                        </div>
                }
            </div>

            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    <thead className="bg-yellow-500 w-full">

                        <tr >
                            <th>Item</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {
                        cart?.map((item, index) => <CartTable key={item._id} index={index} item={item} refetch={refetch}></CartTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Cart;