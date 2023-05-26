import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ toy }) => {
  const { name, img, price, quantity, rating, seller, email, subcategory,_id } = toy;
  console.log(toy);
  return (
    <tr>
      <td>
        
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            
          </div>
          <div>
            <div className="font-bold">{seller}</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
      </td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toydetails/${_id}`}> <button className="btn btn-primary btn-xs">View Details</button></Link>
      </td>
    </tr>
  );
};

export default SingleToy;
