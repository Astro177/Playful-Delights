import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
    
  }, []);

  return (
    <div className="my-container">
      <p className="text-5xl text-center font-bold text-color mb-6">
        This is all the toys our collection contains
      </p>
      <div className="overflow-none">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr>
              <th>No.{toys.length}</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          {toys?.map((toy,index) => (
            <tbody key={toy._id}>
              <tr className="hover">
                <th>{index+1}</th>
                <td>{toy.toyName}</td>
                <td>{toy.toyCategory}</td>
                <td>{toy.price} $</td>
                <td>{toy.availableQuantity} pcs</td>
                <td><button className="btn-outlined">View Details</button></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
