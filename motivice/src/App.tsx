import { useState } from "react";

function App() {
  const [motivice, setMotivice] = useState(null);
  const getMotivice = async () => {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      console.log("response", response);
    } catch (error) {
      console.log(errror);
    }
  };
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-blue-500  to-green-300 flex justify-center items-center px-5">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl text-black font-bold text-center">
            Get ready for motivice ?!
          </h1>
          <button
            onClick={getMotivice}
            className="bg-black text-white text-medium text-2xl rounded-full p-5 cursor pointer"
          >
            I'am ready
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
