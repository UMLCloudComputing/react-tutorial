import "./App.css";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div style={{ minHeight: "5/6" }}>Hi</div>
    </div>
  );
}

export default App;
