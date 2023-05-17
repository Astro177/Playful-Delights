import React from 'react';
import Lottie from 'react-lottie';
import { Link, useRouteError } from 'react-router-dom';
import {animation} from '../assets/Animations/error.json'
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="my-container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Lottie animationData={animation} />
        <div></div>
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8 mt-10">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ErrorPage;