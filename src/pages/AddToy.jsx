/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-container">
      <form
        className="grid grid-cols-2 gap-12 justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="h-10 rounded-lg input-bordered input-accent p-6"
          placeholder="Toy Name"
          {...register("toyName", { required: true })}
        />

        <input
          className="h-10 rounded-lg input-bordered input-accent p-6"
          {...register("sellerName")}
          value={user?.displayName}
        />
        <input
          className="h-10 rounded-lg input-bordered input-accent p-6"
          {...register("sellerEmail")}
          value={user?.email}
        />
        <input
          className="h-10 rounded-lg input-bordered input-accent p-6"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <input
          className="h-10 rounded-lg input-bordered input-accent p-6"
          placeholder="Rating"
          {...register("rating", { required: true })}
        />
        <input
          className="h-10 rounded-lg input-bordered input-accent p-6"
          placeholder="Available Quantity"
          {...register("availableQuantity", { required: true })}
        />
        <textarea
          className="rounded-lg textarea textarea-bordered textarea-warning p-6"
          placeholder="Description"
          {...register("description", { required: true })}
        />

        <select className="h-10 font-semibold" {...register("category")}>
          <option>Choose a Category</option>
          <option value="Marvel">Marvel</option>
          <option value="Star">Star</option>
          <option value="transformers">Transformers</option>
        </select>
        <input
          value="Add Toy"
          className="btn-primary text-center"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddToy;
