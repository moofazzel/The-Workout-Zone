import logo from "./logo.png";
import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import InfoSection from "./components/Info_bar/InfoSection";
import { type } from "@testing-library/user-event/dist/type";
function App() {
  const [datas, setDatas] = useState([]);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const handlerAddToList = (d) => {
    // setDuration(d);
    const storedDuration = localStorage.getItem("durations");
    if (storedDuration) {
      const newDurations = JSON.parse(storedDuration);
      localStorage.setItem("durations", newDurations + parseFloat(d));
      setDuration(newDurations);
    } else {
      const newDurations = localStorage.setItem("durations", d);
      setDuration(newDurations);
    }
  };

  return (
    <div className="flex justify-between">
      <div className="bg-blue-100 w-full lg:w-9/12">
        <div className=" py-24 p-32 pr-24">
          <div className="flex items-center gap-4 mb-6">
            <img className="logo" src={logo} alt="" />
            <h1 className="text-blue-600 text-3xl font-bold">
              The Workout Zone
            </h1>
          </div>
          <h3 className="text-slate-600 text-2xl font-bold mb-8">
            Select today’s exercise
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {datas.map((data) => (
              <Cart
                key={data.id}
                data={data}
                handlerAddToList={handlerAddToList}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 shadow-sm">
        <InfoSection duration={duration} />
      </div>
    </div>
  );
}

export default App;
