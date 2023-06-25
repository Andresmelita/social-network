import { useFormik } from 'formik';
import Cookie from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLock2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { login } from '../lib/services/auth.services';

const Login = () => {
    const [clickLog, setClickLog] = useState(false);
    const handleClickLog = () => setClickLog(!clickLog);

    const log = () => { };

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            login(values)
                .then((response) => {
                    Cookie.set('token', response.data.token[0].public);
                    Swal.fire({
                        position: 'top',
                        toast: true,
                        icon: 'success',
                        title: 'Sesión iniciada con éxito!',
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 2200,
                    });
                    setTimeout(function () {
                        window.location.href = '/profile';
                    }, 2200);
                })
                .catch((error) => {
                    console.log(error);
                    Swal.fire({
                        position: 'top',
                        toast: true,
                        icon: 'error',
                        title: 'Datos Incorrectos',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                });
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email('Must be a valid email')
                .required('Email is required'),
            password: yup.string().trim().required('Password is required'),
        }),
    });

    return (
        <div className="login__page flex items-center">
            <div className="login__card flex flex-col md:flex-row xs:m-auto md:m-0 w-screen">
                {/* <div className="login__image hidden bg-[url('/images/login_img.jpg')] bg-cover bg-center md:block w-1/2 h-screen overflow-hidden relative">
                    <div className="letters__container flex justify-center align-center w-[100%] h-[100%] ">
                        <div className="letters flex items-center w-fit">
                            <img
                                className=" w-[245px] h-[54px]"
                                src="/images/letrasLogin.png"
                                alt=""
                            />
                            <img
                                className=" w-[129px] h-[28px]"
                                src="/images/letrasLogin2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div> */}
                <div className="login__body flex flex-col xs:m-auto xs:w-[80%] md:w-1/2 md:p-10 p-4 md:h-max overflow-hidden justify-center">
                    <div className="login__body md:w-3/4 lg:w-4/5 md:m-auto md:mt-0 md:mb-0">
                        <div className="login__form flex flex-col gap-3">
                            <div className="vh-100 flex flex-column justify-center align-items-center py-[10px]">
                                <form className="w-[500px]" onSubmit={formik.handleSubmit}>
                                    <h1 className='text-[30px] font-bold text-center pb-[10px] shadow-text welcome'>Welcome !</h1>
                                    <div className="form__email flex flex-col gap-2 pb-[8px]">
                                        <label
                                            className="text-[#1D1C3F] l600-normal-16px"
                                            htmlFor="email"
                                        >
                                        </label>
                                        <div className="border-2 rounded-full text-[#1D1C3F] bg-[#E8F0FE] border-[#3f2e91] flex ">
                                            <div className="flex justify-center items-center w-[60px]">
                                                <MdEmail className="text-[22px]" />
                                            </div>
                                            <input
                                                className="bg-[#E8F0FE] rounded-full l400-normal-16px p-3.5 w-full"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>

                                        {formik.errors.email && (
                                            <div className="text-danger text-red-700 flex justify-end">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form__email flex flex-col gap-2 pb-[8px]">
                                        <label
                                            className="text-[#1D1C3F] l600-normal-16px"
                                            htmlFor="Enter your Password"
                                        >
                                        </label>
                                        <div className="border-2 rounded-full text-[#1D1C3F] bg-[#E8F0FE] border-[#3f2e91] flex">
                                            <div className="flex justify-center items-center w-[60px]">
                                                <RiLock2Fill className="text-[22px]" />
                                            </div>
                                            <input
                                                className="bg-[#E8F0FE] l400-normal-16px border-none p-3.5 rounded-full w-[100%] text-[#1D1C3F] default"
                                                name="password"
                                                type="password"
                                                placeholder="***********"
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>

                                        {formik.errors.password && (
                                            <div className="text-danger text-red-700 flex justify-end">
                                                {formik.errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form__button" onClick={log}>
                                        <button
                                            type="submit"
                                            className="hover:scale-110 ease-in-out duration-300  shadow-text w-full p-4 mt-[8px] bg-[url('/images/back01.jpg')] bg-cover rounded-full text-[#fff] l600-normal-16px"
                                        ><p className='shadow-text text-[20px]'>Log in</p>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="form__recovery flex items-center justify-center">
                                {/* <a className="l400-normal-16px text-center text-[#4d4d4dbb]">
                                    Did you forget your password?
                                </a> */}
                                <Link
                                    className="justify-center flex l400-normal-16px w-40 text-center pt-[12px] text-[#4d4d4dbb]"
                                    href="/sign-up"
                                >
                                    or
                                    <p className="flex transition-all ease-in hover:text-[18px] font-bold text-[#3f2e91]">
                                        &nbsp;&nbsp;Sign up
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
