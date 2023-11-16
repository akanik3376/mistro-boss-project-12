/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";




const CartTable = ({ item, index, refetch }) => {
    // console.log(item)
    const { image, name, price, email, _id } = item || {}
    const axiosSecure = useAxiosSecure()

    const HandelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `${name}`,
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    {index + 1}
                </td>
                <td>

                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{name}</div>
                </td>
                <td>
                    {price}
                </td>

                <td>{email}</td>
                <th>
                    <button onClick={() => HandelDelete(_id)}
                        className="btn text-red-600 font-3xl"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                </th>
            </tr>
        </tbody>


    );
};

export default CartTable;