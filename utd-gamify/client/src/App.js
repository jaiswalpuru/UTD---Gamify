import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import logo from "./logo.svg"
import "./App.css";
import HomePage from "./components/Homepage";
import Location from "./components/Location";
import Rooms from "./components/Rooms";
import GameZone from "./components/GameZone";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/index")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{data}</p>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/*" element={<Rooms />} />
        <Route path="/rooms/gamezone" element={<GameZone />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
