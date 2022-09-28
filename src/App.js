import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import InfoSection from "./components/Info_bar/InfoSection";
function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="flex justify-between">
      <div className="bg-blue-100 w-full lg:w-9/12">
        <div className="grid grid-cols-3 gap-6 py-28 p-32 pr-24">
          {datas.map((data) => (
            <Cart data={data} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/4 shadow-sm">
        <InfoSection />
      </div>
    </div>
  );
}

export default App;
