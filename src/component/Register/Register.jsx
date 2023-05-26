import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import Lottie from "lottie-react";
import register from '../../register.json';
import Swal from 'sweetalert2';

const Register = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { createUser, updateUserData } = useContext(AuthContext)
  const handleRegister = (e) => {
    setSuccess('');
    setError('');

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        setSuccess('User Created Successfully');
        updateUserData(name, photo)

        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'User Created Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        setError(err.message);
      })
  }
  useEffect(() => {
    document.title = "AnimalFunLand|Register"
  }, [])
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <Lottie animationData={register}></Lottie>
          </div>
          <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body  ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="name" className="input input-bordered"  required/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name='email' placeholder="email" className="input input-bordered"  required/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered"  required/>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">photo URL</span>
                    </label>
                    <input type="text" name='image' placeholder="Photo URL" className="input input-bordered"  required/>
                    <p className='mt-5 text-green-500'>{success}</p>
                    <p className='mt-5 text-red-500'>{error}</p>
                  </div>

                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>

                  <p className='mt-10 text-center'>Already have an account?<Link to='/login' className='text-blue-600'>Log in</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;