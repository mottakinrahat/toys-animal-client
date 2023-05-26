import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import login from '../../Login.json';

const Login = () => {
  useEffect(()=>{
    document.title="AnimalFunLand|Login"
  },[])
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname ||'/';
    const{loginUser,loginWithGoogle}=useContext(AuthContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    const handleGoogle=()=>{
        loginWithGoogle()
        .then(result=>{
            const googleLogin=result.user;
            console.log(googleLogin);
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     <Lottie animationData={login}></Lottie>
    </div>
    <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}>
      <div className="card-body  ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>

          <div className='mt-10 text-center'>
            <button onClick={handleGoogle} className="btn btn-circle btn-outline">
  <FaGoogle></FaGoogle>
</button>
          </div>

          <p className='mt-10 text-center'>Don't have an account?<Link to='/register' className='text-blue-600'>Register</Link></p>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;