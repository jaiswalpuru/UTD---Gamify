import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import logo from "./logo.svg"
import "./App.css";

import Login from "./components/Login";

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
        <Route path="/" exact element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
