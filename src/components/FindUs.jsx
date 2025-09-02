import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2>Find Us On</h2>
      <div className="join flex join-vertical *:w-full mt-2">
        <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
        <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
      </div>
    </div>
  );
};

export default FindUs;
