import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrormessage] = useState("");
  const { createUser, setUser, UpdateUesrProfile } = useContext(AuthContext);
  const handelSubmit = (e) => {
    e.preventDefault();

    const from = new FormData(e.target);
    // const name = from.get("name")
    const email = from.get("email");
    const name = from.get("name");
    const photo = from.get("photo");
    if (name.length < 5) {
      setErrormessage("Name Should Be More Then 5 Character!!!");
      return;
    } else {
      setErrormessage("");
    }
    // const photo = from.get("photo")
    const password = from.get("password");
    // console.log( {name, email, password, photo})
    createUser(email, password)
      .then((res) => {
        setErrormessage("");
        const user = res.user;
        UpdateUesrProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser(user);
            navigate("/")
            console.log(user);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        const err = error.message;
        setErrormessage(err);
      });
  };
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

              <form onSubmit={handelSubmit} className="fieldset space-y-4">
                {/* Name */}
                <div>
                  <label className="label font-medium">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="label font-medium">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Enter photo URL"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label font-medium">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Button */}
                <button className="btn btn-neutral w-full">Register</button>
              </form>
              {errorMessage && <p className="text-red-600">{errorMessage}</p>}

              {/* Divider */}
              <div className="divider">OR</div>

              {/* Login link */}
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  to={"/auth/login"}
                  className="link link-primary text-red-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
