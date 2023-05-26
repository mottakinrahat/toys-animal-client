import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import SpecificData from '../SpecificData/SpecificData';
import Swal from 'sweetalert2';

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [specificData, setSpecificData] = useState([]);
  const [sortBy, setSortBy] = useState(''); // State to keep track of sorting order
  const url = `https://toys-animal-assignment11-server.vercel.app/singleToys?email=${user?.email}`;

  useEffect(() => {
    fetch(`${url}&sort=${sortBy}`)
      .then((res) => res.json())
      .then((data) => {
        setSpecificData(data);
      });
  }, [url, sortBy]);
  useEffect(()=>{
    document.title="Animal|My Toy"
  },[])
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-animal-assignment11-server.vercel.app/singleToys/${id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              const remaining = specificData.filter(
                (specific) => specific._id !== id
              );
              setSpecificData(remaining);
            }
          })
          .catch((error) => {
            Swal.fire(
              'Error!',
              'An error occurred while deleting the file.',
              'error'
            );
          });
      }
    });
  };

  return (
    <div>
      <div className='text-center mb-5'>
        {/* Sorting buttons */}
        <button className='btn bg-gradient-to-r border-none from-cyan-500 to-blue-500 text-white mr-2' onClick={() => setSortBy('price_asc')}>
          Sort by Price (Low to High)
        </button>
        <button className='btn bg-gradient-to-r border-none from-cyan-500 to-blue-500 text-white' onClick={() => setSortBy('price_desc')}>
          Sort by Price (High to Low)
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className='bg-blue-200'>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {specificData.map((toy, index) => (
              <SpecificData
                key={index}
                toy={toy}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
