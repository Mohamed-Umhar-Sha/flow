import React from "react";
import { ImLocation2 } from "react-icons/im";
import order from "../assests/Order.png";
const ConnectAccount = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 justify-center p-20">
      <div className="max-w-lg rounded-lg drop-shadow-2xl bg-white hover:scale-110  group hover:bg-green-500 transition duration-700">
        <div className="flex justify-center">
        <img
          className="object-cover h-48 w-96 rounded-full w-full h-48 "
          src={order}
          alt="hellow"
        />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl text-center font-bold text-gray-900 group-hover:text-white">
            hellow
          </h5>
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">description</p>
        </div>
      </div>
      <div className="max-w-lg rounded-lg drop-shadow-2xl bg-white hover:scale-110 group hover:bg-green-500 transition duration-700">
        <div className="p-6">
          <div className="flex justify-between">
            <h5 className="text-xl font-bold text-gray-900 group-hover:text-white">hellow</h5>
            <button className="px-8 py-3 text-sm font-medium text-white bg-green-700 rounded-lg group-hover:bg-white group-hover:text-green-700 focus:ring-4 focus:ring-blue-300">
              click
            </button>
          </div>
          <hr className="my-4" />
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">
            Business Phone Number
          </p>
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">Phone Number Id:</p>
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">App ID:</p>
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">Access Token:</p>
        </div>
      </div>
      <div className="max-w-lg rounded-lg drop-shadow-2xl bg-white hover:scale-110 group hover:bg-green-500 transition duration-700">
        <div className="p-6">
          <div className="flex mb-4">
            <p className="font-normal text-gray-700 group-hover:text-white">About</p>
            <ImLocation2 className="text-green-500 group-hover:text-white" />
          </div>
          <div className="flex mb-4">
            <p className="font-normal text-gray-700 group-hover:text-white">Address:</p>
            <ImLocation2 className="text-green-500 group-hover:text-white" />
          </div>
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">Websites:</p>
        </div>
      </div>

      <div className="max-w-lg rounded-lg drop-shadow-2xl bg-white hover:scale-110 group hover:bg-green-500 transition duration-700">
        <div className="p-6">
          <div className="flex justify-between">
            <h5 className="text-xl font-bold text-gray-900 group-hover:text-white">hellow</h5>
            <button className="px-8 py-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg group-hover:bg-white group-hover:text-green-700 focus:ring-4 focus:ring-blue-300">
              <span >click</span>
            </button>
          </div>
          <hr className="my-4" />
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">
            Business Phone Number
          </p>
          <p className="mb-4 font-normal text-gray-700 group group-hover:text-white">Phone Number Id:</p>
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">App ID:</p>
          <p className="mb-4 font-normal text-gray-700 group-hover:text-white">Access Token:</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectAccount;
