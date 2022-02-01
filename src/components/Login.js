import React from "react";
import { Link } from "react-router-dom";
import {collection,getDocs, addDoc} from "firebase/firestore";


function Login() {
  return (
    <div>
      <div className="main-div flex justify-center items-center bg-white h-screen w-full ">
        <div className="form-login flex flex-col space-y-3 bg-blue-500 p-14 rounded-md shadow-xl">
          <input
            type="text"
            placeholder="Email"
            className="py-1 px-4 outline-none rounded-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className="py-1  px-4 outline-none rounded-sm"
          />
          <Link to="/users"> 
          <button className="bg-gray-50 py-1 outline-none rounded-sm w-24">
            Login
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
