import { Helmet } from "react-helmet";
import loginBg from "../../assets/others/authentication.png"
import loginImg from "../../assets/others/authentication2.png"
import { CiFacebook } from "react-icons/ci";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";

const Login = () => {


    const [disabled, SetDisabled] = useState(true)
    const { googleLogin, loginUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const form = location.state?.form?.pathname || "/"


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const HandelValidate = (e) => {
        const user_captcha_value = e.target.value
        // console.log(user_captcha_value)

        if (validateCaptcha(user_captcha_value) == true) {
            SetDisabled(false)
        }
        else if (validateCaptcha(user_captcha_value) == "") {
            swal("Please Type the Captcha");
            SetDisabled(true)
        }

        else {
            swal("Captcha Does Not Match");
            SetDisabled(true)
        }
    }

    //google login
    const HandelGoogleLogin = () => {
        googleLogin()
        navigate('/', { state: { form: location } })
    }

    // login with email & password
    const HandelLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        // console.log(email, password)

        // user login
        loginUser(email, password)
            .then(res => {
                console.log(res)
                swal("User login success fully")


                navigate('/', { state: { form: location } })
            })
            .catch(err => {
                console.log(err)
                swal("Something went wrong please try again")

            })


    }



    return (

        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen w-full bg-base-200" style={{ backgroundImage: `url(${loginBg})` }}>
                <div className="hero-content flex-col lg:flex-row px-12 md:px-16">
                    <div>
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">

                        <form onSubmit={HandelLogin}
                            className="card-body">
                            <h1 className="text-center text-4xl font-bold">Login</h1>

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"
                                    placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            {/* verification code */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={HandelValidate} type="text" name="captcha"
                                    placeholder="Type the Captcha" className="input input-bordered" required />


                            </div>


                            <div className="form-control mt-6">
                                <input type="submit" disabled={false} value="Login"
                                    className="btn bg-[#D1A054] text-white font-bold" />

                            </div>
                        </form>
                        <p className="text-center text-[#D1A054]">New here?  <Link to='/register'>Create a New Account</Link></p>
                        <div className="flex flex-col justify-center items-center mt-2">
                            <p>Or sign up with</p>
                            <div className="flex gap-6 text-4xl mt-4">
                                <CiFacebook></CiFacebook>
                                <div
                                    onClick={HandelGoogleLogin}><AiFillGoogleCircle></AiFillGoogleCircle>
                                </div>
                                <AiFillGithub></AiFillGithub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;