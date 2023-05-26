import React from 'react';
import { Link } from 'react-router-dom';


const SpecificData = ({ toy, handleDelete }) => {
  const { _id, name, img, price, quantity, rating, seller, email, subcategory } = toy;

 

  return (
    <tr>
      <td>
       
      </td>
      <td>
        <div className="flex items-center space-x-3">
         
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
       <Link to={`/update/${_id}`}> <button className="btn btn-primary btn-xs">Update</button></Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-xs ml-2">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SpecificData;
