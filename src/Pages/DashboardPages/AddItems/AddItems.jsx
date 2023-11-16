import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";

const image_hosting = import.meta.env.VITE_IMAGEBB_API_KEY

const image_Host_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {

        //fast upload img in imgBB
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_Host_api, imgFile, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        //get get uploaded img link
        if (res.data?.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                image: res.data.data.display_url,// come in 20-21 line
                price: parseFloat(data.price),
                details: data.Details
            }

            // post item in server only admin can post data
            axiosSecure.post('/menu', menuItem)
                .then(res => {

                    if (res.data.insertedId) {
                        reset()
                        swal("Items added success fully")
                    }
                })
        }
    }
    return (
        <div className="">
            <SectionTitle subHeading={"---What's new?---"}
                heading={'ADD AN ITEM'}
            ></SectionTitle>

            <div className="p-8 bg-[#F3F3F3]">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>

                        </label>
                        <input required {...register("name")}
                            type="text" placeholder="Type here" className="input input-bordered w-full " />

                    </div>

                    <div className="flex  gap-6">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>

                            <select defaultValue='default' {...register("category")} required
                                className="select w-full uppercase">
                                <option disabled value='default'>please select on</option>
                                <option value="desserts">desserts</option>
                                <option value="pizza">pizza</option>
                                <option value="salad">salad</option>
                                <option value="soup">soup</option>
                                <option value="drinks">drinks</option>
                            </select>

                        </div>


                        {/* price */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input  {...register("price")}
                                type="number" required
                                placeholder="Price" className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>

                        </label>
                        <textarea {...register("Details")} required placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label mr-4">
                            <span className="label-text">select a file</span>

                        </label>
                        <input {...register("image")} required
                            type="file" className="file-input file-input-bordered w-full max-w-xs " />

                    </div>
                    <button className="btn mt-6 bg-[#B58130] font-semibold text-white">
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;