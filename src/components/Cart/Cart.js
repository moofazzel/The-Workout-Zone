import React from "react";

const Cart = ({ data }) => {
  const { id, name, description, img, duration, age } = data;

  const sortDescription = description.slice(0, 56);

  console.log(data);

  return (
    <div className="bg-white shadow-sm rounded-xl p-4">
      <img className="rounded-lg mb-3" src={img} alt="" />
      <h2 className="text-2xl font-semibold mb-2"> {name} </h2>
      <p className=" text-sm text-gray-500 mb-2"> {sortDescription} ...</p>
      <p className=" text-sm font-medium mb-1">For Age: {age} </p>
      <p className=" text-sm font-medium mb-2">Time requried: {duration} </p>
      <button className="bg-blue-700 w-full py-1 rounded-lg text-white font-medium">Add to List</button>
    </div>
  );
};

export default Cart;
