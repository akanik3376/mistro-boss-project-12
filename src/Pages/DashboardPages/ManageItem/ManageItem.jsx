import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import useMenu from "../../../Hooks/useMenu";
import { FaUpload, } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";
import Swal from "sweetalert2";

const ManageItem = () => {

    const [menus] = useMenu()
    const axiosSecure = useAxiosSecure()

    //update item
    const HandelUpdateItem = id => {
        console.log(id)
    }


    // delete item
    const HandelDeleteItem = id => {

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
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            swal(`Item delete success fully`)
                        }
                    })
            }
        })
    }



    return (
        <div>
            <SectionTitle
                subHeading="---Hurry Up!---"
                heading="MANAGE ALL ITEMS"
            ></SectionTitle>

            <div>
                <h1 className="text-4xl">Total items: 6</h1>
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
                            menus?.map((menu, index) => <tbody key={menu._id}>
                                {/* row 1 */}
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className=" w-12 h-12">
                                                <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {menu?.name}
                                    </td>
                                    <td>
                                        {menu?.price}

                                    </td>

                                    <td>


                                        <button onClick={() => HandelUpdateItem(menu._id)}
                                            className="btn bg-yellow-500"><FaUpload></FaUpload></button>

                                    </td>

                                    <th>
                                        <button onClick={() => HandelDeleteItem(menu._id)}
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