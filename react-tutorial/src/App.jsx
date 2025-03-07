import "./App.css";
import { NavBar } from "./NavBar";
import { Counter } from "./Counter"
import { NameCard } from "./NameCard";
import { useState } from "react";

function App() {
  const [showNameCard, setShowNameCard] = useState(false)
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Counter/>

      {
        showNameCard ? (<NameCard/>) : (
          <div>False</div>
        )
      }

      {
        !showNameCard ? (<svg height={50} width={50} href="./assets/react.svg" ></svg>) : (<div>nothing</div>)
      }

      <button onClick={() => setShowNameCard(!showNameCard)}>Toggle!</button>
      
      {/* <div style={{ minHeight: "3/4" }}>Hi</div> */}
    </div>
  );
}

export default App;
