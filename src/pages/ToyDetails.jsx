import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(toy);
  return (
    <div className="my-container">
      <div className="card lg:card-side bg-base-100 shadow-xl p-6">
        <figure>
          <img src={toy.toyPictureUrl} alt="toy" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-5xl text-color font-bold mb-6">{toy.toyName}</h2>
          <h2 className="text-slate-400 mb-8">{toy.description}</h2>
          <p className="text-lg font-semi">Seller Name: {toy.sellerName}</p>
          <p className="text-lg font-semi">Seller Email: {toy.sellerEmail}</p>
          <p className="text-lg font-semi">Category: {toy.toyCategory}</p>
          <p className="text-lg font-semi">Price: {toy.price} $</p>
          <p className="text-lg font-semi">
            Available Quantity: {toy.availableQuantity} pcs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
