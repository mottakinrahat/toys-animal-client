import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleCategory = ({toy}) => {
    const { name, img, price, quantity, rating, seller, email, subcategory,_id } = toy;
    return (
        <div className='flex'>
         <Tabs>
        {/* category cards */}
         <TabPanel>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold'>Price:$ <span>{price}</span></p>
  
   <p className='font-bold'>Rating:$ <span>{rating}</span></p>
    <Rating style={{ maxWidth: 150 }} value={Math.round(rating||0)} readOnly />

    <div className="card-actions justify-end">
     <Link to={`/toydetails/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
          </TabPanel>
         </Tabs>
        </div>
    );
};

export default SingleCategory;