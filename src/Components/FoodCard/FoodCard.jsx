/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { price, image, recipe, name, _id } = item || {}
    const [refetch] = useCart()
    // console.log(refetch)

    const { user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const path = location.state?.form?.pathname || "/"

    // card item data send server side
    const HandelAddToCart = () => {
        // send data to backhand
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                price,
                image,
                recipe,
                name
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // console.log(res?.data)
                    if (res?.data.insertedId) {
                        Swal.fire(`${name} add to cart Done!`)
                        refetch()
                    }
                })
        }
        else (
            Swal.fire({
                title: 'You are not login?',
                text: "Please login for add to cart item!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        navigate(path, { replace: true })
                    )
                }
            })
        )
    }


    return (
        <div className="card ">
            <figure >
                <img src={image} alt="image" className="relative" />
            </figure>
            <p className=" absolute right-5 top-4
            bg-[#111827] w-20 text-center font-semibold text-white py-2">${price}</p>
            <div className="card-body items-center text-center bg-[#F3F3F3] ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={HandelAddToCart}
                        className="btn btn-outline bg-[#111827] border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;