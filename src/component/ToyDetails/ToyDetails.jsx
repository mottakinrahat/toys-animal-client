import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const singleData=useLoaderData();
    const { name, img, price, quantity, rating, seller, email, subcategory,_id,details } = singleData;
    useEffect(()=>{
      document.title="AnimalFunLand |Toy Details"
    },[])
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='bg-cyan-700 text-white p-6 rounded-lg'>
      <h1 className="text-5xl font-bold text-yellow-200">{name}</h1>
      <p className="py-6 text-xl font-semibold">Seller Name: {seller}</p>
      <p className="py-6 text-xl font-semibold">Seller email: {email}</p>
      <p className="py-6 text-xl font-semibold">Seller Price: {price}</p>
     <div className='flex gap-2'>
     <p className="py-6 text-xl font-semibold">rating: {rating}</p>
      <Rating style={{ maxWidth: 150 }} value={Math.round(rating||0)} readOnly />
     </div>
      <p className="py-6 text-xl font-semibold">Available Quantity: {quantity}</p>
      <p className="py-6 text-xl font-semibold">Details Description: <span className=''> {details}</span></p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyDetails;