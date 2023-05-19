/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#0b7ce2"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true} state={{ from: location }} />;
};

export default PrivateRoute;
