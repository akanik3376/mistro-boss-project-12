import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { logoutUser } = useAuth()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/users');
                return res.data;
            } catch (error) {
                console.error('Error fetching user data:', error);
                if (error) {
                    await logoutUser()
                    navigate('/login')
                }
                throw error;
            }
        },
    });
    // console.log(users)

    // make admin user
    const HandelMakeAdmin = user => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Role Updated!',
                                `${name}`,
                                'success'
                            )
                        }
                    })
            }
        })
    }


    //delete user
    const HandelDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
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
        <div>
            <button className="btn btn-ghost font-semibold text-3xl">Total Users:{users.length}</button>

            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead className="bg-yellow-500 ">

                        <tr >

                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {
                        users?.map((user, index) => <tbody key={user._id}>
                            {/* row 1 */}
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}

                                </td>

                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => HandelMakeAdmin(user)}
                                                className="btn bg-yellow-500"><FaUser></FaUser></button>
                                    }
                                </td>

                                <th>
                                    <button onClick={() => HandelDeleteUser(user)}
                                        className="btn text-red-600 font-3xl"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUsers;