import React from "react";
//import logo from "./logo.svg"
import "./App.css";
import HomePage from "./components/Homepage";

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
  return <HomePage />;
};

export default App;
