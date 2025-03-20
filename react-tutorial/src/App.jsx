import "./App.css";
import { NavBar } from "./components/NavBar";
import { Counter } from "./components/Counter"
import { NameCard } from "./components/NameCard";
import { useState } from "react";

// function App() {
//   const [showNameCard, setShowNameCard] = useState(false)
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <Counter/>

//       {
//         showNameCard ? (<NameCard/>) : (
//           <div>False</div>
//         )
//       }

//       {
//         !showNameCard ? (<svg height={50} width={50} href="./assets/react.svg" ></svg>) : (<div>nothing</div>)
//       }

//       <button onClick={() => setShowNameCard(!showNameCard)}>Toggle!</button>
      
//       {/* <div style={{ minHeight: "3/4" }}>Hi</div> */}
//     </div>
//   );
// }

const memberData = [
  {
    name: "Nick Bottari",
    grade: "Sophomore",
    major: "Computer Science",
    email: "nbottari9@gmail.com"
  },
  {
    name: "Nick Bottari",
    grade: "Sophomore",
    major: "Computer Science",
    email: "nbottari9@gmail.com",
  },
  {
    name: "CJ Coco",
    grade: "Junior",
    major: "Computer Science",
    email: "chriscoco1205@gmail.com",
  },
  {
    name: "Gurpreet Singh",
    grade: "Junior",
    major: "Computer Science - Data Science",
    email: "gurpreet_singh@student.uml.edu",
  },
  {
    name: "Gurpreet Singh",
    grade: "Junior",
    major: "Computer Science - Data Science",
    email: "gurpreet_singh@student.uml.edu",
  },
  {
    name: "Gurpreet Singh",
    grade: "Junior",
    major: "Computer Science - Data Science",
    email: "gurpreet_singh@student.uml.edu",
  },
]


function App() {

  const appendToLocalStorage = (item) => {
    const data = localStorage.getItem("data")
    if (data) {
      localStorage.setItem("data", JSON.stringify([...JSON.parse(data), item]))
    } else {
      localStorage.setItem("data", JSON.stringify([item]))
    }
  }
  function test() {
    appendToLocalStorage({name: "Martin"})
  }

  return (
    <div>
      <NavBar/>
      <div id="card-container" style={{display: "flex", flexDirection: "row", gap: "1em", flexWrap: "wrap", position: "relative", margin: "1em"}}>
        {
          memberData.map((curr, idx) => {
            return (
              <NameCard key={idx} name={curr.name} grade={curr.grade} major={curr.major} email={curr.email}/>
            )
            })
        }
      </div>
        <button onClick={test}>click</button>
    </div>
    
  )
}

export default App;
