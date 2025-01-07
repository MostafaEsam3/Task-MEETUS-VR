import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import sideImage from "./../../../assets/meetusvr design element 02 (1) 1.svg";
import google from "./../../../assets/Icon-Google.svg";
import { Link, useNavigate } from 'react-router-dom';
import Api_Dashboard from '../../../Interceptor/Interceotor';
import axios from 'axios';
import "./Login.css"
import Cookies from "js-cookie"; 


export default function Login() {
    let [erroralertform, setAlertForm] = useState(false);
    const navigate = useNavigate();


    const loginHandler = async (dataSend) => {
        await Api_Dashboard.post('/yeshtery/token',
            dataSend
        ).then((response) => {
            console.log(response);
            console.log(response.data.userInfo.roles);
            Cookies.set("token-", response.data.token, { expires: 4 });
            getInfo();
            navigate("/dashboard");
        }).catch((err) => {
            setAlertForm(true);
            setTimeout(() => setAlertForm(false), 3000);
        })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: (values,{resetForm}) => {
           const dataSend = {
            "email":values.email,
            "password":values.password,
            "isEmployee":true
           }
           loginHandler(dataSend)
           resetForm()
        },
    });
    const getInfo= async()=>{
        Api_Dashboard.get('/user/info').then((response)=>{
            console.log(response);
         sessionStorage.setItem("userInfo", JSON.stringify(response.data));
        }).catch((err)=>{
            console.log(err);   
        })}

    return (
        <>

        <div className='row  justify-content-center g-0 wraber-log '>
{/* for form */}
            <div className=' col-3 form-wrap  text-center d-flex flex-column justify-content-center'>
                <h1 className='fw-bold'>Welcome back</h1>
                <p className='text-muted'>step into our shopping metaverse  for an </p>
                <p className='text-muted  '> unforgattable shopping experience </p>
                <form onSubmit={formik.handleSubmit} >
                <div className='mt-4'>
             <input  type='email'  id='email'  name="email" className='form-control'
              placeholder='Email'  
                {...formik.getFieldProps('email')}
              />
                 {formik.touched.email && formik.errors.email ? (
               <div className='text-danger'>{formik.errors.email}</div>
           ) : null}
                <input   type='password'
               id='password'
               name="password"
               className='form-control mt-3'
               placeholder='password'
               {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ? (
              <div className='text-danger'>{formik.errors.password}</div>
          ) : null}
                <button type="submit" class="btn btn-primary w-100 mt-4">Login</button>
             </div>
                </form>
                <div class="signup-link">
                Don't have an account? <Link >Sign up</Link>

                </div>
                {/* <button onClick={()=>getInfo()}>ihhhhhh</button> */}

            </div>


{/* for image  */}
            <div className='col-6 image-wrap '>
                <img className='image-sec' src={sideImage} alt="e-commerce" />
            </div>
        </div>
           
        </>
    );
}






  {/* Right Section for Login Form */}
//   <div className='col-12 col-md-6 d-flex align-items-center justify-content-center m-0 gx-0 p-0 text-center text-md-start bg-light-subtle border-1 rounded-2  '>
//   <form
//       onSubmit={formik.handleSubmit}
//       style={{ width: "70%" }}
//   >
//       <h2>Login</h2>
//       {/* Email Field */}
//       <div className='mb-3'>
//           <input
//               type='email'
//               id='email'
//               name="email"
//               className='form-control'
//               placeholder='Email'
//               style={{ border: "none", width: "100%" }}
//               {...formik.getFieldProps('email')}
//           />
//           {formik.touched.email && formik.errors.email ? (
//               <div className='text-danger'>{formik.errors.email}</div>
//           ) : null}
//       </div>

//       <div style={{ height: "1px", width: "80%", borderBottom: "1px solid grey" }}></div>

//       {/* Password Field */}
//       <div className='mb-3'>
//           <input
//               type='password'
//               id='password'
//               name="password"
//               className='form-control'
//               placeholder='password'
//               style={{ border: "none", width: "100%" }}
//               {...formik.getFieldProps('password')}
//           />
//           {formik.touched.password && formik.errors.password ? (
//               <div className='text-danger'>{formik.errors.password}</div>
//           ) : null}
//       </div>

//       <div style={{ height: "1px", width: "80%", borderBottom: "1px solid grey" }}></div>

//       {/* Submit and Forget Password */}
//       <div className='d-flex mt-4 justify-content-between align-items-center' style={{ width: "80%" }}>
//           <button
//               type='submit'
//               className='btn'
//               style={{
//                   backgroundColor: "#DB4444",
//                   color: "white",
//               }}
//           >
//               Log In
//           </button>
//           <Link style={{ color: "#DB4444" }} to={"/signup"}>create new account</Link>
//       </div>
//   </form>
// </div>