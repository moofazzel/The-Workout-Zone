import React from "react";

const InfoSection = () => {
  return (
    <div className="text-center pt-10 px-8 fixed">
      <div>
        <img src="" alt="" />
        <h3>Mofazzel Hossen</h3>
        <p>Khulna, Bangladesh</p>
      </div>
      <div className="flex justify-between bg-blue-50 px-6 py-4 rounded-lg my-6">
        <div>
          <p>
            <span className="text-2xl font-bold">79</span>
            <span className="text-slate-900">kg</span>
          </p>
          <span className="text-base text-slate-900">Weight</span>
        </div>
        <div>
          <p>
            <span className="text-2xl font-bold">5.5</span>
          </p>
          <span className="text-base text-slate-900">Height</span>
        </div>
        <div>
          <p>
            <span className="text-2xl font-bold">27</span>
            <span className="text-slate-900">yrs</span>
          </p>
          <span className="text-base text-slate-900">Age</span>
        </div>
      </div>

      <h3 className="text-left text-2xl font-semibold ml-1">Add A Break</h3>

      <div className="flex justify-between bg-blue-50 px-6 py-4 rounded-lg my-6 mb-10 gap-2">
        <span className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white">
          20s
        </span>
        <span className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white">
          30s
        </span>
        <span className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white">
          35s
        </span>
        <span className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white">
          45s
        </span>
        <span className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white">
          60s
        </span>
      </div>

      <h3 className="text-left text-2xl font-semibold ml-1">Exercise time</h3>

      <div className="flex justify-between bg-blue-50 px-6 py-4 rounded-lg my-6 mb-2">
        <h3 className="text-lg font-semibold text-gray-700">Exercise time</h3>
        <span className="text-slate-400 text-sm">0 Second</span>
      </div>

      <div className="flex justify-between bg-blue-50 px-6 py-4 rounded-lg my-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-700">Break time</h3>
        <span className="text-slate-400 text-sm">0 Second</span>
      </div>

      <button className=" text-lg bg-blue-700 w-full py-3 rounded-lg text-white font-semibold">Activity Completed</button>
    </div>
  );
};

export default InfoSection;
