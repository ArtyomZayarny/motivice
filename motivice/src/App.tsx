import { useState } from "react";
import type { IMotivice } from "./types";

function App() {
  const [motiviceData, setMotivice] = useState(null);

  const getMotivice = async () => {
    try {
      const response = await fetch("https://motivice-be.vercel.app/api/quote");
      const data = await response.json();
      setMotivice(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const greeting = () => {
    return (
      <>
        <h1 className="text-6xl text-black font-bold text-center">
          Get ready for motivice ?!
        </h1>
        <button
          onClick={getMotivice}
          className="bg-black text-white text-medium text-2xl rounded-full p-5 cursor pointer"
        >
          I'am ready
        </button>
      </>
    );
  };

  const motivice = (motivice: IMotivice) => {
    return (
      <>
        <div className="flex flex-col gap-8 bg-amber-200 rounded-md p-8 md:max-w-100">
          <h1 className="text-black text-4xl text-bold text-center ">
            {motivice.q}
          </h1>
          <span className="text-sm text-blue text-center">{motivice.a}</span>
        </div>
        <button
          className="bg-black text-white text-medium text-2xl rounded-full p-5 cursor pointer"
          onClick={getMotivice}
        >
          Get more motivice =)
        </button>
      </>
    );
  };
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-blue-500  to-green-300 flex justify-center items-center px-5">
        <div className="h-screen flex flex-col justify-around">
          {!motiviceData ? greeting() : motivice(motiviceData)}
        </div>
      </div>
    </>
  );
}

export default App;
