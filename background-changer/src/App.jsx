import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");

  const handleRed = () => {
    setColor("red");
  };

  const handleBlue = () => {
    setColor("blue")
  };

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 px-3 py-2 rounded-3xl">
          <button onClick={handleRed} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={handleBlue} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("maroon")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "maroon"}}>Maroon</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
          
        </div>

      </div>
    </div>
  );
}

export default App;
