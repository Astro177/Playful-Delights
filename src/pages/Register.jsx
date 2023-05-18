/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { registerUser, updateUserDetails } = useContext(AuthContext);

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;

    if (password.length < 6) {
      setError("Please provide a 6 character password");
      return;
    } else {
      setError("");
    }
    if ((!email, !password, !name, !photo)) {
      setError("Please provide valid information");
      return;
    } else {
      registerUser(email, password)
        .then((result) => {
          updateUserDetails(result.user, name, photo);
          e.preventDefault();
          form.reset();
          navigate("/login");
          setError("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="text-center">
      <p className="text-4xl text-color mb-8">
        New to our website? Register now!
      </p>
      <form className=" mb-4" onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            required
            className="input input-bordered input-primary w-full max-w-xs "
          />
        </div>
        <p className="error">{error}</p>
        <p className="mb-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-xl hover:underline decoration-1 text-sky-500"
          >
            Sign In
          </Link>
        </p>
        <button className="btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
