import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../SingleToy/SingleToy';

const AllToys = () => {
  const allToyData = useLoaderData();
  const [allToy, setAllToy] = useState(allToyData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = allToy.filter((toy) => {
    return toy.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const displayedToys = filteredToys.slice(0, 20);

  useEffect(()=>{
    document.title="AnimalFunLand|All Toy"
  },[])

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by toy name"
          className="input input-bordered"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
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
            {displayedToys.map((toy, index) => (
              <SingleToy key={index} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
