import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          {/* Left side text / illustration */}
          {/* <div className="text-center lg:text-left max-w-md">
            <h1 className="text-4xl font-bold">Create an Account</h1>
            <p className="py-4 text-base text-gray-600">
              Join us today and explore amazing opportunities. Manage your jobs,
              applications, or dashboard with ease.
            </p>
          </div> */}

          {/* Register Card */}
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Register Your Account
              </h2>

              <fieldset className="fieldset space-y-4">
                {/* Name */}
                <div>
                  <label className="label font-medium">Full Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="label font-medium">Photo URL</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Enter photo URL"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label font-medium">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label font-medium">Password</label>
                  <input
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Button */}
                <button className="btn btn-neutral w-full">
                  Register
                </button>
              </fieldset>

              {/* Divider */}
              <div className="divider">OR</div>

              {/* Login link */}
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to={'/auth/login'} className="link link-primary text-red-600">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
