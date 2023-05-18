import React, { useContext, useRef, useState } from "react";
import { TbBrandGithub, TbBrandGoogle, TbEye } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const { handleGoogleSignIn, handleGitHubSignIn, signIn } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const emailRef = useRef();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold text-color mb-8">
        Login to your account
      </h1>
      <p>Login using social networks</p>
      <div className="flex justify-center items- gap-8 mt-4 mb-2">
        <div>
          <button
            className="text-4xl p-2 bg-slate-800 rounded-full"
            onClick={handleGoogleSignIn}
          >
            {" "}
            <TbBrandGoogle />{" "}
          </button>
        </div>
        <div>
          <button
            className="text-4xl p-2 bg-slate-800 rounded-full"
            onClick={handleGitHubSignIn}
          >
            <TbBrandGithub />
          </button>
        </div>
      </div>
      <p>Or</p>
      <form onSubmit={handleSignIn}>
        <div className="display: inline-block mt-2">
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={emailRef}
            required
            className="input input-bordered input-primary w-full max-w-xs mb-6"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <p className="text-red-800">{error}</p>
        <p className="mt-4 cursor-pointer hover:underline decoration-1">
          <button
            className="btn rounded-3xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? "Show Password" : "Hide password"}
          </button>
          <br />
          <span onClick={handleResetPassword}>Forgot password?</span>
        </p>
        <p className="mb-4">
          <span className="text-2xl text-color">New here?</span> Sign up and
          discover our great amount of new recipes{" "}
          <Link
            to="/register"
            className="text-xl hover:underline decoration-1 text-sky-500"
          >
            Sign Up
          </Link>
        </p>

        <button className="btn-primary">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
