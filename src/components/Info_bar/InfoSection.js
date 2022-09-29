import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../images/location.png";
import avatar from "../../images/avatar.jpg";

// toast.configure()

const InfoSection = () => {
  // console.log(durations);

  const [brkTime, setBrkTime] = useState(0);

  const durations = localStorage.getItem("durations");

  const reset = () => {
    localStorage.removeItem("durations");
    window.location.reload(false);
  };

  const handlerBreak = (e) => {
    const breakTime = e.target.innerText;
    localStorage.setItem("storedBreakTime", breakTime);
    const storedBrkTime = localStorage.getItem("storedBreakTime");
    setBrkTime(storedBrkTime);
    // console.log(e.target.innerText);
  };

  // console.log(storedBrkTime);

  const notify = () => toast("Well done, You finished today's workout ");

  return (
    <div className="text-center pt-10 px-8 mb-8">
      <div className="text-left flex gap-4">
        <img className="rounded-full w-12 lg:w-16" src={avatar} alt="" />

        <div>
          <h3 className="text-2xl text-slate-800 font-bold ">
            Mofazzel Hossen
          </h3>
          <div className="flex gap-2">
            <img className="icon" src={icon} alt="" />
            <p className="text-sm text-slate-500">Khulna, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-blue-50 px-6 py-4 rounded-lg my-6">
        <div>
          <p>
            <span className="md:text-2xl lg:text-2xl font-bold">79</span>
            <span className="text-slate-900">kg</span>
          </p>
          <span className="text-base text-slate-900">Weight</span>
        </div>
        <div>
          <p>
            <span className="md:text-2xl lg:text-2xl font-bold">5.5</span>
          </p>
          <span className="text-base text-slate-900">Height</span>
        </div>
        <div>
          <p>
            <span className="md:text-2xl lg:text-2xl font-bold">27</span>
            <span className="text-slate-900">yrs</span>
          </p>
          <span className="text-base text-slate-900">Age</span>
        </div>
      </div>

      <h3 className="text-left text-2xl font-semibold ml-1">Add A Break</h3>

      <div className="flex justify-between bg-blue-50 px-6 py-4 rounded-lg my-6 mb-10 gap-2">
        <button
          onClick={(e) => handlerBreak(e)}
          className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white"
        >
          20s
        </button>
        <button
          onClick={(e) => handlerBreak(e)}
          className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white"
        >
          30s
        </button>
        <button
          onClick={(e) => handlerBreak(e)}
          className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white"
        >
          35s
        </button>
        <button
          onClick={(e) => handlerBreak(e)}
          className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white"
        >
          45s
        </button>
        <button
          onClick={(e) => handlerBreak(e)}
          className="text-md font-medium p-3 bg-white rounded-full transition hover:bg-blue-600 hover:text-white"
        >
          60s
        </button>
      </div>

      <h3 className="text-left text-2xl font-semibold ml-1">Exercise time</h3>

      <div className="flex justify-between items-center bg-blue-50 px-6 py-4 rounded-lg my-6 mb-2">
        <h3 className="text-lg font-semibold text-gray-700">Exercise time</h3>
        <span className="text-blue-700 font-medium text-md">
          {durations} Second
        </span>
        <button
          onClick={reset}
          className="text-red-600 text-lg font-bold border-2 border-red-400 rounded-md px-2 pb-1 hover:bg-red-400 hover:text-white"
        >
          x
        </button>
      </div>

      <div className="flex justify-between bg-blue-50 px-6 py-4 rounded-lg my-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-700">Break time</h3>
        <span className="text-blue-700 font-medium text-md mr-5">
          {brkTime}
        </span>
      </div>

      <button
        onClick={notify}
        className=" text-lg bg-blue-700 w-full py-3 rounded-lg text-white font-semibold"
      >
        Activity Completed
      </button>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default InfoSection;
