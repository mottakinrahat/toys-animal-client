import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import Lottie from "lottie-react";
import update from '../../update.json';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'; 

const Update = () => {
    useEffect(() => {
        document.title = "AnimalFunLand | Update Data";
    }, []);

    const makeUpdate = useLoaderData();
    console.log(makeUpdate);

    const { user } = useContext(AuthContext);
    console.log(user);

    const handleAddToy = (e) => {
     
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const AvailableQuantity = form.quantity.value;
        const details = form.details.value;

        const updateAbleData = {
            img: image,
            seller: sellerName,
            name: name,
            subcategory: subCategory,
            price: price,
            quantity: AvailableQuantity,
            email: sellerEmail,
            rating: rating,
            details: details
        };

        console.log(updateAbleData);

        fetch(`https://toys-animal-assignment11-server.vercel.app/singleToys/${makeUpdate._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateAbleData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount>0) {
                   
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toys updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center  w-1/4 lg:text-left">
                        <h1 className="text-5xl font-bold text-blue-600">Update Your Data!</h1>
                        <Lottie animationData={update}></Lottie>
                    </div>

                    <div className="card flex w-3/4 max-w-3xl shadow-2xl bg-base-100">
                        <form onSubmit={handleAddToy}>
                            <div className="card-body w-full">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" defaultValue={makeUpdate.img} name="image" placeholder="Image URL" className="input input-bordered"  required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" defaultValue={makeUpdate.name} name="name" placeholder="Toys Name" className="input input-bordered"  required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" defaultValue={makeUpdate.seller} name="sellerName" placeholder="seller name" className="input input-bordered"  required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue={user?.email}
                                            name="sellerEmail"
                                            placeholder="Seller email"
                                            className="input input-bordered"
                                            required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub-Category</span>
                                        </label>
                                        <input type="text" defaultValue={makeUpdate.subcategory} name="category" placeholder="sub-category" className="input input-bordered"  required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" defaultValue={makeUpdate.price} name="price" placeholder="$ Price" className="input input-bordered"  required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" defaultValue={makeUpdate.rating} name="rating" placeholder="Rating" className="input input-bordered"  required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            defaultValue={makeUpdate.quantity}
                                            placeholder="Available quantity"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details Description</span>
                                    </label>
                                    <input type="text" defaultValue={makeUpdate.details} name="details" placeholder="Add details" className="input input-bordered"  required/>
                                    <label className="label"></label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update Toy</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
