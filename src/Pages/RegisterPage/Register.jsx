import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterBg from "../../assets/others/authentication.png"
import RegisterImg from "../../assets/others/authentication1.png"
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai';
import { CiFacebook, } from 'react-icons/ci';
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";

// navigate(path, { replace: true })
const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const path = location.state?.form?.pathname || "/"
    const { createUser } = useAuth()

    // react hook form
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(res => {
                console.log(res)
                swal("User create success fully")
                navigate(path, { replace: true })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="hero min-h-screen w-full mb-12" style={{ backgroundImage: `url(${RegisterBg})` }}>
                <div className="hero-content flex-col lg:flex-row px-12 md:px-16">
                    <div>
                        <img src={RegisterImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-center text-4xl font-bold">Sign Up</h1>

                            {/* name input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name="name" placeholder="Your name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-700">Name is required</span>}
                            </div>

                            {/* email input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true, minLength: 6, maxLength: 20 })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.password?.type === "required" && <span className="text-red-700">Email is required</span>}
                            </div>

                            {/* password input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password",
                                        {
                                            required: true,
                                            minLength: 6, maxLength: 20,
                                            pattern: /[a-zA-Z0-9-]/
                                        })} name="password" placeholder="password"
                                    className="input input-bordered" required />

                                {/* error show hare && password validation */}
                                {errors.password?.type === 'required' && <span className="text-red-700">This field is required</span>}

                                {errors.password?.type === 'minLength' && <span className="text-red-700">Password must be getter Then 6 character and less then 20 character</span>}

                                {errors.password?.type === 'pattern' && <span className="text-red-700">Password must have include @[a-zA-Z0-9-]+$</span>}

                                {/* forget password ref */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control ">
                                <button className="btn bg-[#D1A054] text-white font-bold">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-center text-[#D1A054]">Already registered? <Link to='/login'>Go to log in</Link></p>
                        <div className="flex flex-col justify-center items-center mt-2">
                            <p>Or sign up with</p>
                            <div className="flex gap-6 text-4xl mt-4">
                                <CiFacebook></CiFacebook>
                                <AiFillGoogleCircle></AiFillGoogleCircle>
                                <AiFillGithub></AiFillGithub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;