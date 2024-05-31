import React from 'react';

const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="max-w-lg rounded-lg shadow-md bg-white mx-20 hover:scale-105 translate-y-3 skew-y-3 sm:transform-none">
      {imageUrl && (
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="p-6">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <hr/>
        <p className="mb-4 font-normal text-gray-700">{description}</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
            {buttonText}
          </button>
      </div>
    </div>
  );
};

export default Card;