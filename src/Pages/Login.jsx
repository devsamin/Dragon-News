import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {loginUser, setUser} = useContext(AuthContext)
  

  const handelLogin=(e)=>{
    e.preventDefault()
    const form = new FormData(e.target)
    const email = form.get("email")
    const password = form.get("password")
    // console.log({email, password})
    loginUser(email, password)
    .then(res=>{
      const user = res.user
      setUser(user)
    })
    .catch(err=>{
      const er = err.messages
      console.log(er)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        
        {/* Left side text / illustration (optional) */}
        {/* <div className="text-center lg:text-left max-w-md">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <p className="py-4 text-base text-gray-600">
            Please login to your account to continue.  
            Manage your jobs, applications, or dashboard easily.
          </p>
        </div> */}

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center mb-4">Login Your Account</h2>
            
            <form onSubmit={handelLogin} className="fieldset space-y-4">
              {/* Email */}
              <div>
                <label className="label font-medium">Email</label>
                <input 
                name="email"
                  type="email" 
                  className="input input-bordered w-full" 
                  placeholder="Enter your email" 
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
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              {/* Button */}
              <button className="btn btn-neutral w-full">Login</button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Signup link */}
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link to={'/auth/register'} className="link link-primary text-red-600">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
