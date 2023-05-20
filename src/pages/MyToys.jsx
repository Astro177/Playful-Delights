/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UpdateToy from "./UpdateToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [ownToys, setOwnToys] = useState([]);
  const [control, setControl] = useState(false);
  const [updateModal, setUpdate] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOwnToys(data));
  }, [user, control]);

  const handleToyUpdate = (data) => {
    fetch(`http://localhost:5000/updatedToy/${data._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          Swal.fire("Success!", "You updated the Toy!", "success");
        } else {
          alert("Please change something to update data");
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/remove/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            setControl(!control);
          });
        }
        console.log(result);
      });
  };

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
            <tbody key={ownToy._id}>
              <tr className="hover">
                <th>{index + 1}.</th>
                <td>{ownToy.toyName}</td>
                <td>{ownToy.toyCategory}</td>
                <td>{ownToy.price} $</td>
                <td>{ownToy.availableQuantity} pcs</td>
                <td>
                  <label htmlFor={ownToy._id} className="btn-outlined">
                    Update
                  </label>
                  <label
                    className="btn-outlined"
                    onClick={() => handleDelete(ownToy._id)}
                  >
                    Delete
                  </label>
                </td>
                <UpdateToy ownToy={ownToy} handleToyUpdate={handleToyUpdate} />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
