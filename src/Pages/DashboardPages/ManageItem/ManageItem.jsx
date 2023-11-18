import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import useMenu from "../../../Hooks/useMenu";
import { FaUpload, } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {

    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    // delete item
    const handleDeleteItem = (id) => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then((res) => {
                        if (res.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire('Item deleted successfully');
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting item:', error);
                        Swal.fire('Error deleting item', '', 'error');
                    });
            }
        });
    };




    return (
        <div>
            <SectionTitle
                subHeading="---Hurry Up!---"
                heading="MANAGE ALL ITEMS"
            ></SectionTitle>

            <div>
                <h1 className="text-4xl">Total items: {menu.length}</h1>
                <div className="overflow-x-auto mt-4">
                    <table className="table w-full">
                        <thead className="bg-yellow-500 text-white">

                            <tr >

                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>

                            </tr>
                        </thead>
                        {
                            menu?.map((item, index) => <tbody key={item._id}>
                                {/* row 1 */}
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className=" w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>
                                        {item?.price}

                                    </td>
                                    {/* update data */}
                                    <td>
                                        <Link to={`/dashboard/update/${item._id}`}>
                                            <button
                                                className="btn bg-yellow-500"><FaUpload></FaUpload>
                                            </button>
                                        </Link>

                                    </td>
                                    {/* delete data */}
                                    <th>
                                        <button onClick={() => handleDeleteItem(item._id)}
                                            className="btn text-red-600 font-3xl"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </th>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;