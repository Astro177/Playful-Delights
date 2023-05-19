/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [ownToys, setOwnToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOwnToys(data));
  }, [user]);
  return (
    <div className="my-container">
      <p className="text-5xl text-center font-bold text-color mb-6">
        This is all the toys that you have added
      </p>
      <div className="overflow-none">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr>
              <th>No.</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {ownToys?.map((ownToy, index) => (
            <tbody key={ownToys._id}>
              <tr className="hover">
                <th>{index + 1}.</th>
                <td>{ownToy.toyName}</td>
                <td>{ownToy.toyCategory}</td>
                <td>{ownToy.price} $</td>
                <td>{ownToy.availableQuantity} pcs</td>
                <Link to={`/toyDetails/}`}>
                  {" "}
                  <td>
                    <button className="btn-outlined">Update</button>
                  </td>
                </Link>
                <td>
                
                    <button className="btn-outlined">Delete</button>
                  </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
