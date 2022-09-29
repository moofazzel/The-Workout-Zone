import React from "react";

const Cart = ({ data, handlerAddToList }) => {
  const { name, description, img, duration, age } = data;

  const sortDescription = description.slice(0, 56);

  return (
    <div className="bg-white shadow-sm rounded-xl p-4">
      <img className="rounded-lg mb-3" src={img} alt="" />
      <h2 className="text-2xl font-semibold mb-2"> {name} </h2>
      <p className=" text-sm text-gray-500 mb-3"> {sortDescription} ...</p>
      <p className=" text-sm font-medium mb-2">For Age: {age} </p>
      <p className=" text-sm font-medium mb-4">Time requried: {duration}s </p>
      <button
        onClick={() => handlerAddToList(duration)}
        className="bg-blue-700 w-full py-1 rounded-lg text-white font-medium"
      >
        Add to List
      </button>
    </div>
  );
};

export default Cart;
