/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  const { _id, toyName, toyPictureUrl, toyCategory, price } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={toyPictureUrl} alt="toy" className="rounded-xl w-48 h-48" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toyName}</h2>
        <p>Category: {toyCategory}</p>
        <p>Price: {price} $</p>
        <div className="card-actions">
          <Link to={`/toyDetails/${_id}`}>
            {" "}
            <button className="btn-outlined">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
