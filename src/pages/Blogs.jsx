import React from "react";
import useTitle from "../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="my-container">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #1: What is an access token and refresh token? How do they
          work and where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">Ans:</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #2: What is the comparison between SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">Ans:</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #3: What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">Ans:</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
      >
        <div className="collapse-title text-xl font-bold">
          Question #4: What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">Ans:</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
